class ArticleStatus < ActiveModel::Type::String
  def cast_value(value)
    I18n.t("activerecord.attributes.article/status").invert.fetch(value).to_s
  end
end

ActiveModel::Type.register(:article_status, ArticleStatus)
