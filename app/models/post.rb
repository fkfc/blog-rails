class Post < ApplicationRecord
  has_many :comments, dependent: :destroy
  belongs_to :user
  validates :title, :content, presence: true
  validates_length_of :title, maximum: 50
  validates_length_of :content, maximum: 500

  # Creates a new slug every time a Post is about to be created
  before_create :set_slug

  def set_slug
    # Tries a slug with the pattern my-post-title-UUID
    # Retries with a different UUID until the slug is unique
    loop do
      self.slug = "#{to_slug(title)}-#{SecureRandom.uuid}"
      break unless Post.where(slug: slug).exists?
    end
  end

  # Used to specify the url link
  def to_param
    slug
  end

  def to_xml(options = {})
    to_xml_opts = {:skip_types => true} # no type information, not such a great idea!
    to_xml_opts.merge!(options.slice(:builder, :skip_instruct))
    # a builder instance is provided when to_xml is called on a collection of instructors,
    # in which case you would not want to have <?xml ...?> added to each item
    to_xml_opts[:root] ||= "instructor"
    self.attributes.to_xml(to_xml_opts)
  end

end
