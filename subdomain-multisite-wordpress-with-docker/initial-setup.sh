#!/bin/bash

set -eux

PROD_WWW_FQDN=www.example.com
PROD_SUB_FQDN=sub.example.com

LOCAL_WWW_FQDN=www.lvh.me
LOCAL_SUB_FQDN=sub.lvh.me

MYSQL_HOSTNAME=mysql
MYSQL_USERNAME=username
MYSQL_PASSWORD=password
MYSQL_DATABASE=wordpress

DUMP_FILENAME=sample.sql

# import database
docker cp ${DUMP_FILENAME} $(basename $(pwd))_db_1:/
docker-compose exec -T db mysql -u${MYSQL_USERNAME} -p${MYSQL_PASSWORD} ${MYSQL_DATABASE} < ${DUMP_FILENAME}

# replace domain
docker-compose exec -T wordpress wp search-replace 'https://'${PROD_WWW_FQDN} 'http://'${LOCAL_WWW_FQDN} --allow-root --all-tables
docker-compose exec -T wordpress wp search-replace 'https://'${PROD_SUB_FQDN} 'http://'${LOCAL_SUB_FQDN} --allow-root --all-tables
docker-compose exec -T wordpress wp search-replace ${PROD_WWW_FQDN} ${LOCAL_WWW_FQDN} --allow-root --all-tables
docker-compose exec -T wordpress wp search-replace ${PROD_SUB_FQDN} ${LOCAL_SUB_FQDN} --allow-root --all-tables

# update wp-config.php for subdomain multisite
docker-compose exec -T wordpress wp config set WP_ALLOW_MULTISITE true --raw --allow-root
docker-compose exec -T wordpress wp config set MULTISITE true --raw --allow-root
docker-compose exec -T wordpress wp config set SUBDOMAIN_INSTALL true --raw --allow-root
docker-compose exec -T wordpress wp config set DOMAIN_CURRENT_SITE ${LOCAL_WWW_FQDN} --allow-root
docker-compose exec -T wordpress wp config set PATH_CURRENT_SITE / --allow-root
docker-compose exec -T wordpress wp config set SITE_ID_CURRENT_SITE 1 --raw --allow-root
docker-compose exec -T wordpress wp config set BLOG_ID_CURRENT_SITE 1 --raw --allow-root
