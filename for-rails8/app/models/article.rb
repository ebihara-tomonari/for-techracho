class Article < ApplicationRecord
  enum :status, { draft: 0, publish: 1, privated: 10 }, suffix: true

  validates :title, presence: true

  delegate :author, :category, :tags, to: :custom_fields_to_instance

  class CustomFields
    include ActiveModel::Model
    include ActiveModel::Attributes

    attribute :author, :string
    # attribute :category, :string
    attribute :category_i18n, :string
    attr_accessor :tags

    # validates :category, presence: true, inclusion: { in: I18n.t("activerecord.attributes.article/category").keys.map(&:to_s) }

    def category
      I18n.t("activerecord.attributes.article/category").invert.fetch(category_i18n)
    end
  end

  def custom_fields_to_instance
    CustomFields.new(custom_fields)
  end
end
