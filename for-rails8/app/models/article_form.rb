class ArticleForm
  include ActiveModel::Model
  include ActiveModel::Attributes

  attribute :title, :string
  attribute :body, :string
  # attribute :status, :article_status
  attribute :status_i18n, :string
  attribute :custom_fields, :string

  Article.statuses.keys.each do |key|
    delegate "#{key}_status?".to_sym, to: :to_model
  end

  def to_model
    to_model_attributes = attributes.except("status_i18n").merge(status: status)
    Article.new(to_model_attributes)
  end

  private

  def status
    I18n.t("activerecord.attributes.article/status").invert.fetch(status_i18n)
  end
end


