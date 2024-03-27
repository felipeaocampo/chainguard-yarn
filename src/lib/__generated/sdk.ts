import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Dimension: { input: any; output: any; }
  HexColor: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Quality: { input: any; output: any; }
};

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset';
  contentType?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  description?: Maybe<Scalars['String']['output']>;
  fileName?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['Int']['output']>;
  linkedFrom?: Maybe<AssetLinkingCollections>;
  size?: Maybe<Scalars['Int']['output']>;
  sys: Sys;
  title?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
  width?: Maybe<Scalars['Int']['output']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  transform?: InputMaybe<ImageTransformOptions>;
};


/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type AssetCollection = {
  __typename?: 'AssetCollection';
  items: Array<Maybe<Asset>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>;
  contentType?: InputMaybe<Scalars['String']['input']>;
  contentType_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentType_not?: InputMaybe<Scalars['String']['input']>;
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName?: InputMaybe<Scalars['String']['input']>;
  fileName_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  fileName_not?: InputMaybe<Scalars['String']['input']>;
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>;
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  height?: InputMaybe<Scalars['Int']['input']>;
  height_exists?: InputMaybe<Scalars['Boolean']['input']>;
  height_gt?: InputMaybe<Scalars['Int']['input']>;
  height_gte?: InputMaybe<Scalars['Int']['input']>;
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  height_lt?: InputMaybe<Scalars['Int']['input']>;
  height_lte?: InputMaybe<Scalars['Int']['input']>;
  height_not?: InputMaybe<Scalars['Int']['input']>;
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size?: InputMaybe<Scalars['Int']['input']>;
  size_exists?: InputMaybe<Scalars['Boolean']['input']>;
  size_gt?: InputMaybe<Scalars['Int']['input']>;
  size_gte?: InputMaybe<Scalars['Int']['input']>;
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  size_lt?: InputMaybe<Scalars['Int']['input']>;
  size_lte?: InputMaybe<Scalars['Int']['input']>;
  size_not?: InputMaybe<Scalars['Int']['input']>;
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_contains?: InputMaybe<Scalars['String']['input']>;
  title_exists?: InputMaybe<Scalars['Boolean']['input']>;
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  title_not?: InputMaybe<Scalars['String']['input']>;
  title_not_contains?: InputMaybe<Scalars['String']['input']>;
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url?: InputMaybe<Scalars['String']['input']>;
  url_contains?: InputMaybe<Scalars['String']['input']>;
  url_exists?: InputMaybe<Scalars['Boolean']['input']>;
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  url_not?: InputMaybe<Scalars['String']['input']>;
  url_not_contains?: InputMaybe<Scalars['String']['input']>;
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  width?: InputMaybe<Scalars['Int']['input']>;
  width_exists?: InputMaybe<Scalars['Boolean']['input']>;
  width_gt?: InputMaybe<Scalars['Int']['input']>;
  width_gte?: InputMaybe<Scalars['Int']['input']>;
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  width_lt?: InputMaybe<Scalars['Int']['input']>;
  width_lte?: InputMaybe<Scalars['Int']['input']>;
  width_not?: InputMaybe<Scalars['Int']['input']>;
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections';
  blogCollection?: Maybe<BlogCollection>;
  customerTestimonialCardCollection?: Maybe<CustomerTestimonialCardCollection>;
  customersSectionCollection?: Maybe<CustomersSectionCollection>;
  entryCollection?: Maybe<EntryCollection>;
  generalContentCardCollection?: Maybe<GeneralContentCardCollection>;
  seoMetadataCollection?: Maybe<SeoMetadataCollection>;
  testContentCollection?: Maybe<TestContentCollection>;
};


export type AssetLinkingCollectionsBlogCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsCustomerTestimonialCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsCustomersSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsGeneralContentCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsSeoMetadataCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type AssetLinkingCollectionsTestContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/blog) */
export type Blog = Entry & {
  __typename?: 'Blog';
  authors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  blogContent?: Maybe<BlogBlogContent>;
  blogName?: Maybe<Scalars['String']['output']>;
  blogSlug?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  datePublished?: Maybe<Scalars['DateTime']['output']>;
  linkedFrom?: Maybe<BlogLinkingCollections>;
  mainImage?: Maybe<Asset>;
  metaAbout?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/blog) */
export type BlogAuthorsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/blog) */
export type BlogBlogContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/blog) */
export type BlogBlogNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/blog) */
export type BlogBlogSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/blog) */
export type BlogDatePublishedArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/blog) */
export type BlogLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/blog) */
export type BlogMainImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/blog) */
export type BlogMetaAboutArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/blog) */
export type BlogTagsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type BlogBlogContent = {
  __typename?: 'BlogBlogContent';
  json: Scalars['JSON']['output'];
  links: BlogBlogContentLinks;
};

export type BlogBlogContentAssets = {
  __typename?: 'BlogBlogContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type BlogBlogContentEntries = {
  __typename?: 'BlogBlogContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type BlogBlogContentLinks = {
  __typename?: 'BlogBlogContentLinks';
  assets: BlogBlogContentAssets;
  entries: BlogBlogContentEntries;
  resources: BlogBlogContentResources;
};

export type BlogBlogContentResources = {
  __typename?: 'BlogBlogContentResources';
  block: Array<BlogBlogContentResourcesBlock>;
  hyperlink: Array<BlogBlogContentResourcesHyperlink>;
  inline: Array<BlogBlogContentResourcesInline>;
};

export type BlogBlogContentResourcesBlock = ResourceLink & {
  __typename?: 'BlogBlogContentResourcesBlock';
  sys: ResourceSys;
};

export type BlogBlogContentResourcesHyperlink = ResourceLink & {
  __typename?: 'BlogBlogContentResourcesHyperlink';
  sys: ResourceSys;
};

export type BlogBlogContentResourcesInline = ResourceLink & {
  __typename?: 'BlogBlogContentResourcesInline';
  sys: ResourceSys;
};

export type BlogCollection = {
  __typename?: 'BlogCollection';
  items: Array<Maybe<Blog>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type BlogFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlogFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlogFilter>>>;
  authors_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authors_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authors_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authors_exists?: InputMaybe<Scalars['Boolean']['input']>;
  blogContent_contains?: InputMaybe<Scalars['String']['input']>;
  blogContent_exists?: InputMaybe<Scalars['Boolean']['input']>;
  blogContent_not_contains?: InputMaybe<Scalars['String']['input']>;
  blogName?: InputMaybe<Scalars['String']['input']>;
  blogName_contains?: InputMaybe<Scalars['String']['input']>;
  blogName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  blogName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  blogName_not?: InputMaybe<Scalars['String']['input']>;
  blogName_not_contains?: InputMaybe<Scalars['String']['input']>;
  blogName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  blogSlug?: InputMaybe<Scalars['String']['input']>;
  blogSlug_contains?: InputMaybe<Scalars['String']['input']>;
  blogSlug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  blogSlug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  blogSlug_not?: InputMaybe<Scalars['String']['input']>;
  blogSlug_not_contains?: InputMaybe<Scalars['String']['input']>;
  blogSlug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  datePublished?: InputMaybe<Scalars['DateTime']['input']>;
  datePublished_exists?: InputMaybe<Scalars['Boolean']['input']>;
  datePublished_gt?: InputMaybe<Scalars['DateTime']['input']>;
  datePublished_gte?: InputMaybe<Scalars['DateTime']['input']>;
  datePublished_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  datePublished_lt?: InputMaybe<Scalars['DateTime']['input']>;
  datePublished_lte?: InputMaybe<Scalars['DateTime']['input']>;
  datePublished_not?: InputMaybe<Scalars['DateTime']['input']>;
  datePublished_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  mainImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaAbout?: InputMaybe<Scalars['String']['input']>;
  metaAbout_contains?: InputMaybe<Scalars['String']['input']>;
  metaAbout_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaAbout_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaAbout_not?: InputMaybe<Scalars['String']['input']>;
  metaAbout_not_contains?: InputMaybe<Scalars['String']['input']>;
  metaAbout_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  tags_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlogLinkingCollections = {
  __typename?: 'BlogLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type BlogLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum BlogOrder {
  BlogNameAsc = 'blogName_ASC',
  BlogNameDesc = 'blogName_DESC',
  BlogSlugAsc = 'blogSlug_ASC',
  BlogSlugDesc = 'blogSlug_DESC',
  DatePublishedAsc = 'datePublished_ASC',
  DatePublishedDesc = 'datePublished_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/blogPage) */
export type BlogPage = Entry & {
  __typename?: 'BlogPage';
  blogAuthor?: Maybe<Scalars['String']['output']>;
  blogContent?: Maybe<BlogPageBlogContent>;
  blogTag?: Maybe<Scalars['String']['output']>;
  blogTitle?: Maybe<Scalars['String']['output']>;
  blogs?: Maybe<Entry>;
  contentfulMetadata: ContentfulMetadata;
  datePublished?: Maybe<Scalars['DateTime']['output']>;
  linkedFrom?: Maybe<BlogPageLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/blogPage) */
export type BlogPageBlogAuthorArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/blogPage) */
export type BlogPageBlogContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/blogPage) */
export type BlogPageBlogTagArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/blogPage) */
export type BlogPageBlogTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/blogPage) */
export type BlogPageBlogsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/blogPage) */
export type BlogPageDatePublishedArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/blogPage) */
export type BlogPageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BlogPageBlogContent = {
  __typename?: 'BlogPageBlogContent';
  json: Scalars['JSON']['output'];
  links: BlogPageBlogContentLinks;
};

export type BlogPageBlogContentAssets = {
  __typename?: 'BlogPageBlogContentAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type BlogPageBlogContentEntries = {
  __typename?: 'BlogPageBlogContentEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type BlogPageBlogContentLinks = {
  __typename?: 'BlogPageBlogContentLinks';
  assets: BlogPageBlogContentAssets;
  entries: BlogPageBlogContentEntries;
  resources: BlogPageBlogContentResources;
};

export type BlogPageBlogContentResources = {
  __typename?: 'BlogPageBlogContentResources';
  block: Array<BlogPageBlogContentResourcesBlock>;
  hyperlink: Array<BlogPageBlogContentResourcesHyperlink>;
  inline: Array<BlogPageBlogContentResourcesInline>;
};

export type BlogPageBlogContentResourcesBlock = ResourceLink & {
  __typename?: 'BlogPageBlogContentResourcesBlock';
  sys: ResourceSys;
};

export type BlogPageBlogContentResourcesHyperlink = ResourceLink & {
  __typename?: 'BlogPageBlogContentResourcesHyperlink';
  sys: ResourceSys;
};

export type BlogPageBlogContentResourcesInline = ResourceLink & {
  __typename?: 'BlogPageBlogContentResourcesInline';
  sys: ResourceSys;
};

export type BlogPageCollection = {
  __typename?: 'BlogPageCollection';
  items: Array<Maybe<BlogPage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type BlogPageFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlogPageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlogPageFilter>>>;
  blogAuthor?: InputMaybe<Scalars['String']['input']>;
  blogAuthor_contains?: InputMaybe<Scalars['String']['input']>;
  blogAuthor_exists?: InputMaybe<Scalars['Boolean']['input']>;
  blogAuthor_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  blogAuthor_not?: InputMaybe<Scalars['String']['input']>;
  blogAuthor_not_contains?: InputMaybe<Scalars['String']['input']>;
  blogAuthor_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  blogContent_contains?: InputMaybe<Scalars['String']['input']>;
  blogContent_exists?: InputMaybe<Scalars['Boolean']['input']>;
  blogContent_not_contains?: InputMaybe<Scalars['String']['input']>;
  blogTag?: InputMaybe<Scalars['String']['input']>;
  blogTag_contains?: InputMaybe<Scalars['String']['input']>;
  blogTag_exists?: InputMaybe<Scalars['Boolean']['input']>;
  blogTag_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  blogTag_not?: InputMaybe<Scalars['String']['input']>;
  blogTag_not_contains?: InputMaybe<Scalars['String']['input']>;
  blogTag_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  blogTitle?: InputMaybe<Scalars['String']['input']>;
  blogTitle_contains?: InputMaybe<Scalars['String']['input']>;
  blogTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  blogTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  blogTitle_not?: InputMaybe<Scalars['String']['input']>;
  blogTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  blogTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  blogs_exists?: InputMaybe<Scalars['Boolean']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  datePublished?: InputMaybe<Scalars['DateTime']['input']>;
  datePublished_exists?: InputMaybe<Scalars['Boolean']['input']>;
  datePublished_gt?: InputMaybe<Scalars['DateTime']['input']>;
  datePublished_gte?: InputMaybe<Scalars['DateTime']['input']>;
  datePublished_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  datePublished_lt?: InputMaybe<Scalars['DateTime']['input']>;
  datePublished_lte?: InputMaybe<Scalars['DateTime']['input']>;
  datePublished_not?: InputMaybe<Scalars['DateTime']['input']>;
  datePublished_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type BlogPageLinkingCollections = {
  __typename?: 'BlogPageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type BlogPageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum BlogPageOrder {
  BlogAuthorAsc = 'blogAuthor_ASC',
  BlogAuthorDesc = 'blogAuthor_DESC',
  BlogTagAsc = 'blogTag_ASC',
  BlogTagDesc = 'blogTag_DESC',
  BlogTitleAsc = 'blogTitle_ASC',
  BlogTitleDesc = 'blogTitle_DESC',
  DatePublishedAsc = 'datePublished_ASC',
  DatePublishedDesc = 'datePublished_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/blogs) */
export type Blogs = Entry & {
  __typename?: 'Blogs';
  allBlogs?: Maybe<Scalars['Boolean']['output']>;
  blogsPageName?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  featuredBlogsCollection?: Maybe<BlogsFeaturedBlogsCollection>;
  linkedFrom?: Maybe<BlogsLinkingCollections>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/blogs) */
export type BlogsAllBlogsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/blogs) */
export type BlogsBlogsPageNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/blogs) */
export type BlogsFeaturedBlogsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/blogs) */
export type BlogsLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type BlogsCollection = {
  __typename?: 'BlogsCollection';
  items: Array<Maybe<Blogs>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type BlogsFeaturedBlogsCollection = {
  __typename?: 'BlogsFeaturedBlogsCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type BlogsFilter = {
  AND?: InputMaybe<Array<InputMaybe<BlogsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<BlogsFilter>>>;
  allBlogs?: InputMaybe<Scalars['Boolean']['input']>;
  allBlogs_exists?: InputMaybe<Scalars['Boolean']['input']>;
  allBlogs_not?: InputMaybe<Scalars['Boolean']['input']>;
  blogsPageName?: InputMaybe<Scalars['String']['input']>;
  blogsPageName_contains?: InputMaybe<Scalars['String']['input']>;
  blogsPageName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  blogsPageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  blogsPageName_not?: InputMaybe<Scalars['String']['input']>;
  blogsPageName_not_contains?: InputMaybe<Scalars['String']['input']>;
  blogsPageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  featuredBlogsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type BlogsLinkingCollections = {
  __typename?: 'BlogsLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageSectionCollection?: Maybe<PageSectionCollection>;
};


export type BlogsLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type BlogsLinkingCollectionsPageSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BlogsLinkingCollectionsPageSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum BlogsLinkingCollectionsPageSectionCollectionOrder {
  PageSectionNameAsc = 'pageSectionName_ASC',
  PageSectionNameDesc = 'pageSectionName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum BlogsOrder {
  AllBlogsAsc = 'allBlogs_ASC',
  AllBlogsDesc = 'allBlogs_DESC',
  BlogsPageNameAsc = 'blogsPageName_ASC',
  BlogsPageNameDesc = 'blogsPageName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** Code block for blogs [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/codeBlock) */
export type CodeBlock = Entry & {
  __typename?: 'CodeBlock';
  code?: Maybe<Scalars['String']['output']>;
  codeBlockName?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  language?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<CodeBlockLinkingCollections>;
  sys: Sys;
};


/** Code block for blogs [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/codeBlock) */
export type CodeBlockCodeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Code block for blogs [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/codeBlock) */
export type CodeBlockCodeBlockNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Code block for blogs [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/codeBlock) */
export type CodeBlockLanguageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** Code block for blogs [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/codeBlock) */
export type CodeBlockLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CodeBlockCollection = {
  __typename?: 'CodeBlockCollection';
  items: Array<Maybe<CodeBlock>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CodeBlockFilter = {
  AND?: InputMaybe<Array<InputMaybe<CodeBlockFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CodeBlockFilter>>>;
  code?: InputMaybe<Scalars['String']['input']>;
  codeBlockName?: InputMaybe<Scalars['String']['input']>;
  codeBlockName_contains?: InputMaybe<Scalars['String']['input']>;
  codeBlockName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  codeBlockName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  codeBlockName_not?: InputMaybe<Scalars['String']['input']>;
  codeBlockName_not_contains?: InputMaybe<Scalars['String']['input']>;
  codeBlockName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  code_contains?: InputMaybe<Scalars['String']['input']>;
  code_exists?: InputMaybe<Scalars['Boolean']['input']>;
  code_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  code_not?: InputMaybe<Scalars['String']['input']>;
  code_not_contains?: InputMaybe<Scalars['String']['input']>;
  code_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  language?: InputMaybe<Scalars['String']['input']>;
  language_contains?: InputMaybe<Scalars['String']['input']>;
  language_exists?: InputMaybe<Scalars['Boolean']['input']>;
  language_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  language_not?: InputMaybe<Scalars['String']['input']>;
  language_not_contains?: InputMaybe<Scalars['String']['input']>;
  language_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CodeBlockLinkingCollections = {
  __typename?: 'CodeBlockLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type CodeBlockLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CodeBlockOrder {
  CodeBlockNameAsc = 'codeBlockName_ASC',
  CodeBlockNameDesc = 'codeBlockName_DESC',
  LanguageAsc = 'language_ASC',
  LanguageDesc = 'language_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata';
  tags: Array<Maybe<ContentfulTag>>;
};

export type ContentfulMetadataFilter = {
  tags?: InputMaybe<ContentfulMetadataTagsFilter>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/**
 * Represents a tag entity for finding and organizing content easily.
 *     Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag';
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/customerTestimonialCard) */
export type CustomerTestimonialCard = Entry & {
  __typename?: 'CustomerTestimonialCard';
  company?: Maybe<Scalars['String']['output']>;
  contentfulMetadata: ContentfulMetadata;
  customerName?: Maybe<Scalars['String']['output']>;
  isPopUp?: Maybe<Scalars['Boolean']['output']>;
  link?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<CustomerTestimonialCardLinkingCollections>;
  logo?: Maybe<Asset>;
  sys: Sys;
  testimonial?: Maybe<Scalars['String']['output']>;
  testimonialCardName?: Maybe<Scalars['String']['output']>;
  titleposition?: Maybe<Scalars['String']['output']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/customerTestimonialCard) */
export type CustomerTestimonialCardCompanyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/customerTestimonialCard) */
export type CustomerTestimonialCardCustomerNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/customerTestimonialCard) */
export type CustomerTestimonialCardIsPopUpArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/customerTestimonialCard) */
export type CustomerTestimonialCardLinkArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/customerTestimonialCard) */
export type CustomerTestimonialCardLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/customerTestimonialCard) */
export type CustomerTestimonialCardLogoArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/customerTestimonialCard) */
export type CustomerTestimonialCardTestimonialArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/customerTestimonialCard) */
export type CustomerTestimonialCardTestimonialCardNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/customerTestimonialCard) */
export type CustomerTestimonialCardTitlepositionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type CustomerTestimonialCardCollection = {
  __typename?: 'CustomerTestimonialCardCollection';
  items: Array<Maybe<CustomerTestimonialCard>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CustomerTestimonialCardFilter = {
  AND?: InputMaybe<Array<InputMaybe<CustomerTestimonialCardFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CustomerTestimonialCardFilter>>>;
  company?: InputMaybe<Scalars['String']['input']>;
  company_contains?: InputMaybe<Scalars['String']['input']>;
  company_exists?: InputMaybe<Scalars['Boolean']['input']>;
  company_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  company_not?: InputMaybe<Scalars['String']['input']>;
  company_not_contains?: InputMaybe<Scalars['String']['input']>;
  company_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  customerName?: InputMaybe<Scalars['String']['input']>;
  customerName_contains?: InputMaybe<Scalars['String']['input']>;
  customerName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  customerName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  customerName_not?: InputMaybe<Scalars['String']['input']>;
  customerName_not_contains?: InputMaybe<Scalars['String']['input']>;
  customerName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isPopUp?: InputMaybe<Scalars['Boolean']['input']>;
  isPopUp_exists?: InputMaybe<Scalars['Boolean']['input']>;
  isPopUp_not?: InputMaybe<Scalars['Boolean']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  link_contains?: InputMaybe<Scalars['String']['input']>;
  link_exists?: InputMaybe<Scalars['Boolean']['input']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_not?: InputMaybe<Scalars['String']['input']>;
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  testimonial?: InputMaybe<Scalars['String']['input']>;
  testimonialCardName?: InputMaybe<Scalars['String']['input']>;
  testimonialCardName_contains?: InputMaybe<Scalars['String']['input']>;
  testimonialCardName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  testimonialCardName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  testimonialCardName_not?: InputMaybe<Scalars['String']['input']>;
  testimonialCardName_not_contains?: InputMaybe<Scalars['String']['input']>;
  testimonialCardName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  testimonial_contains?: InputMaybe<Scalars['String']['input']>;
  testimonial_exists?: InputMaybe<Scalars['Boolean']['input']>;
  testimonial_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  testimonial_not?: InputMaybe<Scalars['String']['input']>;
  testimonial_not_contains?: InputMaybe<Scalars['String']['input']>;
  testimonial_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  titleposition?: InputMaybe<Scalars['String']['input']>;
  titleposition_contains?: InputMaybe<Scalars['String']['input']>;
  titleposition_exists?: InputMaybe<Scalars['Boolean']['input']>;
  titleposition_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  titleposition_not?: InputMaybe<Scalars['String']['input']>;
  titleposition_not_contains?: InputMaybe<Scalars['String']['input']>;
  titleposition_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CustomerTestimonialCardLinkingCollections = {
  __typename?: 'CustomerTestimonialCardLinkingCollections';
  customersSectionCollection?: Maybe<CustomersSectionCollection>;
  entryCollection?: Maybe<EntryCollection>;
};


export type CustomerTestimonialCardLinkingCollectionsCustomersSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CustomerTestimonialCardLinkingCollectionsCustomersSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CustomerTestimonialCardLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CustomerTestimonialCardLinkingCollectionsCustomersSectionCollectionOrder {
  PageSectionNameAsc = 'pageSectionName_ASC',
  PageSectionNameDesc = 'pageSectionName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CustomerTestimonialCardOrder {
  CompanyAsc = 'company_ASC',
  CompanyDesc = 'company_DESC',
  CustomerNameAsc = 'customerName_ASC',
  CustomerNameDesc = 'customerName_DESC',
  IsPopUpAsc = 'isPopUp_ASC',
  IsPopUpDesc = 'isPopUp_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TestimonialCardNameAsc = 'testimonialCardName_ASC',
  TestimonialCardNameDesc = 'testimonialCardName_DESC',
  TitlepositionAsc = 'titleposition_ASC',
  TitlepositionDesc = 'titleposition_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/customersSection) */
export type CustomersSection = Entry & {
  __typename?: 'CustomersSection';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<CustomersSectionLinkingCollections>;
  pageSectionName?: Maybe<Scalars['String']['output']>;
  selectCustomerLogosCollection?: Maybe<AssetCollection>;
  selectTestimonialsCollection?: Maybe<CustomersSectionSelectTestimonialsCollection>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/customersSection) */
export type CustomersSectionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/customersSection) */
export type CustomersSectionPageSectionNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/customersSection) */
export type CustomersSectionSelectCustomerLogosCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/customersSection) */
export type CustomersSectionSelectTestimonialsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CustomersSectionSelectTestimonialsCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerTestimonialCardFilter>;
};

export type CustomersSectionCollection = {
  __typename?: 'CustomersSectionCollection';
  items: Array<Maybe<CustomersSection>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type CustomersSectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<CustomersSectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CustomersSectionFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  pageSectionName?: InputMaybe<Scalars['String']['input']>;
  pageSectionName_contains?: InputMaybe<Scalars['String']['input']>;
  pageSectionName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageSectionName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageSectionName_not?: InputMaybe<Scalars['String']['input']>;
  pageSectionName_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageSectionName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  selectCustomerLogosCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  selectTestimonials?: InputMaybe<CfCustomerTestimonialCardNestedFilter>;
  selectTestimonialsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type CustomersSectionLinkingCollections = {
  __typename?: 'CustomersSectionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageSectionCollection?: Maybe<PageSectionCollection>;
};


export type CustomersSectionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type CustomersSectionLinkingCollectionsPageSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CustomersSectionLinkingCollectionsPageSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum CustomersSectionLinkingCollectionsPageSectionCollectionOrder {
  PageSectionNameAsc = 'pageSectionName_ASC',
  PageSectionNameDesc = 'pageSectionName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum CustomersSectionOrder {
  PageSectionNameAsc = 'pageSectionName_ASC',
  PageSectionNameDesc = 'pageSectionName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type CustomersSectionSelectTestimonialsCollection = {
  __typename?: 'CustomersSectionSelectTestimonialsCollection';
  items: Array<Maybe<CustomerTestimonialCard>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum CustomersSectionSelectTestimonialsCollectionOrder {
  CompanyAsc = 'company_ASC',
  CompanyDesc = 'company_DESC',
  CustomerNameAsc = 'customerName_ASC',
  CustomerNameDesc = 'customerName_DESC',
  IsPopUpAsc = 'isPopUp_ASC',
  IsPopUpDesc = 'isPopUp_DESC',
  LinkAsc = 'link_ASC',
  LinkDesc = 'link_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TestimonialCardNameAsc = 'testimonialCardName_ASC',
  TestimonialCardNameDesc = 'testimonialCardName_DESC',
  TitlepositionAsc = 'titleposition_ASC',
  TitlepositionDesc = 'titleposition_DESC'
}

export type Entry = {
  contentfulMetadata: ContentfulMetadata;
  sys: Sys;
};

export type EntryCollection = {
  __typename?: 'EntryCollection';
  items: Array<Maybe<Entry>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/generalContentCard) */
export type GeneralContentCard = Entry & {
  __typename?: 'GeneralContentCard';
  contentfulMetadata: ContentfulMetadata;
  ctas?: Maybe<Scalars['JSON']['output']>;
  descriptionText?: Maybe<Scalars['String']['output']>;
  floatingHeaderText?: Maybe<Scalars['JSON']['output']>;
  heading?: Maybe<Scalars['String']['output']>;
  linkedFrom?: Maybe<GeneralContentCardLinkingCollections>;
  list?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mediaCollection?: Maybe<AssetCollection>;
  pageSectionName?: Maybe<Scalars['String']['output']>;
  subheading?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/generalContentCard) */
export type GeneralContentCardCtasArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/generalContentCard) */
export type GeneralContentCardDescriptionTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/generalContentCard) */
export type GeneralContentCardFloatingHeaderTextArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/generalContentCard) */
export type GeneralContentCardHeadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/generalContentCard) */
export type GeneralContentCardLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/generalContentCard) */
export type GeneralContentCardListArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/generalContentCard) */
export type GeneralContentCardMediaCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/generalContentCard) */
export type GeneralContentCardPageSectionNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/generalContentCard) */
export type GeneralContentCardSubheadingArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type GeneralContentCardCollection = {
  __typename?: 'GeneralContentCardCollection';
  items: Array<Maybe<GeneralContentCard>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type GeneralContentCardFilter = {
  AND?: InputMaybe<Array<InputMaybe<GeneralContentCardFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GeneralContentCardFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  ctas_exists?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionText?: InputMaybe<Scalars['String']['input']>;
  descriptionText_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  descriptionText_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  descriptionText_not?: InputMaybe<Scalars['String']['input']>;
  descriptionText_not_contains?: InputMaybe<Scalars['String']['input']>;
  descriptionText_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  floatingHeaderText_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading?: InputMaybe<Scalars['String']['input']>;
  heading_contains?: InputMaybe<Scalars['String']['input']>;
  heading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  heading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  heading_not?: InputMaybe<Scalars['String']['input']>;
  heading_not_contains?: InputMaybe<Scalars['String']['input']>;
  heading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  list_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  list_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  list_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  list_exists?: InputMaybe<Scalars['Boolean']['input']>;
  mediaCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageSectionName?: InputMaybe<Scalars['String']['input']>;
  pageSectionName_contains?: InputMaybe<Scalars['String']['input']>;
  pageSectionName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageSectionName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageSectionName_not?: InputMaybe<Scalars['String']['input']>;
  pageSectionName_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageSectionName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subheading?: InputMaybe<Scalars['String']['input']>;
  subheading_contains?: InputMaybe<Scalars['String']['input']>;
  subheading_exists?: InputMaybe<Scalars['Boolean']['input']>;
  subheading_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  subheading_not?: InputMaybe<Scalars['String']['input']>;
  subheading_not_contains?: InputMaybe<Scalars['String']['input']>;
  subheading_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type GeneralContentCardLinkingCollections = {
  __typename?: 'GeneralContentCardLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageSectionCollection?: Maybe<PageSectionCollection>;
};


export type GeneralContentCardLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type GeneralContentCardLinkingCollectionsPageSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<GeneralContentCardLinkingCollectionsPageSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum GeneralContentCardLinkingCollectionsPageSectionCollectionOrder {
  PageSectionNameAsc = 'pageSectionName_ASC',
  PageSectionNameDesc = 'pageSectionName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum GeneralContentCardOrder {
  HeadingAsc = 'heading_ASC',
  HeadingDesc = 'heading_DESC',
  PageSectionNameAsc = 'pageSectionName_ASC',
  PageSectionNameDesc = 'pageSectionName_DESC',
  SubheadingAsc = 'subheading_ASC',
  SubheadingDesc = 'subheading_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/generalPage) */
export type GeneralPage = Entry & {
  __typename?: 'GeneralPage';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<GeneralPageLinkingCollections>;
  pageMetadata?: Maybe<SeoMetadata>;
  pageName?: Maybe<Scalars['String']['output']>;
  pageSectionCollection?: Maybe<GeneralPagePageSectionCollection>;
  pageSlug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/generalPage) */
export type GeneralPageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/generalPage) */
export type GeneralPagePageMetadataArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  where?: InputMaybe<SeoMetadataFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/generalPage) */
export type GeneralPagePageNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/generalPage) */
export type GeneralPagePageSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<GeneralPagePageSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageSectionFilter>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/generalPage) */
export type GeneralPagePageSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type GeneralPageCollection = {
  __typename?: 'GeneralPageCollection';
  items: Array<Maybe<GeneralPage>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type GeneralPageFilter = {
  AND?: InputMaybe<Array<InputMaybe<GeneralPageFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<GeneralPageFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  pageMetadata?: InputMaybe<CfSeoMetadataNestedFilter>;
  pageMetadata_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName?: InputMaybe<Scalars['String']['input']>;
  pageName_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageName_not?: InputMaybe<Scalars['String']['input']>;
  pageName_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageSection?: InputMaybe<CfPageSectionNestedFilter>;
  pageSectionCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageSlug?: InputMaybe<Scalars['String']['input']>;
  pageSlug_contains?: InputMaybe<Scalars['String']['input']>;
  pageSlug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageSlug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageSlug_not?: InputMaybe<Scalars['String']['input']>;
  pageSlug_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageSlug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type GeneralPageLinkingCollections = {
  __typename?: 'GeneralPageLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type GeneralPageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum GeneralPageOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  PageSlugAsc = 'pageSlug_ASC',
  PageSlugDesc = 'pageSlug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type GeneralPagePageSectionCollection = {
  __typename?: 'GeneralPagePageSectionCollection';
  items: Array<Maybe<PageSection>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export enum GeneralPagePageSectionCollectionOrder {
  PageSectionNameAsc = 'pageSectionName_ASC',
  PageSectionNameDesc = 'pageSectionName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum ImageFormat {
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP'
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT'
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB'
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>;
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>;
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>;
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>;
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>;
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>;
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>;
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>;
};

/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/pageSection) */
export type PageSection = Entry & {
  __typename?: 'PageSection';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<PageSectionLinkingCollections>;
  pageSectionName?: Maybe<Scalars['String']['output']>;
  pageSectionPartsCollection?: Maybe<PageSectionPageSectionPartsCollection>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/pageSection) */
export type PageSectionLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/pageSection) */
export type PageSectionPageSectionNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/pageSection) */
export type PageSectionPageSectionPartsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageSectionPageSectionPartsFilter>;
};

export type PageSectionCollection = {
  __typename?: 'PageSectionCollection';
  items: Array<Maybe<PageSection>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageSectionFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageSectionFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageSectionFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  pageSectionName?: InputMaybe<Scalars['String']['input']>;
  pageSectionName_contains?: InputMaybe<Scalars['String']['input']>;
  pageSectionName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageSectionName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageSectionName_not?: InputMaybe<Scalars['String']['input']>;
  pageSectionName_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageSectionName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageSectionParts?: InputMaybe<CfpageSectionPartsMultiTypeNestedFilter>;
  pageSectionPartsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type PageSectionLinkingCollections = {
  __typename?: 'PageSectionLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  generalPageCollection?: Maybe<GeneralPageCollection>;
};


export type PageSectionLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type PageSectionLinkingCollectionsGeneralPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageSectionLinkingCollectionsGeneralPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum PageSectionLinkingCollectionsGeneralPageCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  PageSlugAsc = 'pageSlug_ASC',
  PageSlugDesc = 'pageSlug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum PageSectionOrder {
  PageSectionNameAsc = 'pageSectionName_ASC',
  PageSectionNameDesc = 'pageSectionName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type PageSectionPageSectionPartsCollection = {
  __typename?: 'PageSectionPageSectionPartsCollection';
  items: Array<Maybe<PageSectionPageSectionPartsItem>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PageSectionPageSectionPartsFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageSectionPageSectionPartsFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageSectionPageSectionPartsFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type PageSectionPageSectionPartsItem = Blogs | CustomersSection | GeneralContentCard | SearchBar;

export type Query = {
  __typename?: 'Query';
  _node?: Maybe<_Node>;
  asset?: Maybe<Asset>;
  assetCollection?: Maybe<AssetCollection>;
  blog?: Maybe<Blog>;
  blogCollection?: Maybe<BlogCollection>;
  blogPage?: Maybe<BlogPage>;
  blogPageCollection?: Maybe<BlogPageCollection>;
  blogs?: Maybe<Blogs>;
  blogsCollection?: Maybe<BlogsCollection>;
  codeBlock?: Maybe<CodeBlock>;
  codeBlockCollection?: Maybe<CodeBlockCollection>;
  customerTestimonialCard?: Maybe<CustomerTestimonialCard>;
  customerTestimonialCardCollection?: Maybe<CustomerTestimonialCardCollection>;
  customersSection?: Maybe<CustomersSection>;
  customersSectionCollection?: Maybe<CustomersSectionCollection>;
  entryCollection?: Maybe<EntryCollection>;
  generalContentCard?: Maybe<GeneralContentCard>;
  generalContentCardCollection?: Maybe<GeneralContentCardCollection>;
  generalPage?: Maybe<GeneralPage>;
  generalPageCollection?: Maybe<GeneralPageCollection>;
  pageSection?: Maybe<PageSection>;
  pageSectionCollection?: Maybe<PageSectionCollection>;
  searchBar?: Maybe<SearchBar>;
  searchBarCollection?: Maybe<SearchBarCollection>;
  seoMetadata?: Maybe<SeoMetadata>;
  seoMetadataCollection?: Maybe<SeoMetadataCollection>;
  testContent?: Maybe<TestContent>;
  testContentCollection?: Maybe<TestContentCollection>;
};


export type Query_NodeArgs = {
  id: Scalars['ID']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<AssetFilter>;
};


export type QueryBlogArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryBlogCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BlogOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlogFilter>;
};


export type QueryBlogPageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryBlogPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BlogPageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlogPageFilter>;
};


export type QueryBlogsArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryBlogsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<BlogsOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<BlogsFilter>;
};


export type QueryCodeBlockArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCodeBlockCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CodeBlockOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CodeBlockFilter>;
};


export type QueryCustomerTestimonialCardArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCustomerTestimonialCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CustomerTestimonialCardOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomerTestimonialCardFilter>;
};


export type QueryCustomersSectionArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryCustomersSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<CustomersSectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<CustomersSectionFilter>;
};


export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<EntryFilter>;
};


export type QueryGeneralContentCardArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGeneralContentCardCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<GeneralContentCardOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GeneralContentCardFilter>;
};


export type QueryGeneralPageArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGeneralPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<GeneralPageOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<GeneralPageFilter>;
};


export type QueryPageSectionArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryPageSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<PageSectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<PageSectionFilter>;
};


export type QuerySearchBarArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySearchBarCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SearchBarOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SearchBarFilter>;
};


export type QuerySeoMetadataArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QuerySeoMetadataCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SeoMetadataOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<SeoMetadataFilter>;
};


export type QueryTestContentArgs = {
  id: Scalars['String']['input'];
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryTestContentCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<TestContentOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  where?: InputMaybe<TestContentFilter>;
};

export type ResourceLink = {
  sys: ResourceSys;
};

export type ResourceSys = {
  __typename?: 'ResourceSys';
  linkType: Scalars['String']['output'];
  urn: Scalars['String']['output'];
};

/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/searchBar) */
export type SearchBar = Entry & {
  __typename?: 'SearchBar';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<SearchBarLinkingCollections>;
  options?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  optionsLabel?: Maybe<Scalars['String']['output']>;
  placeholder?: Maybe<Scalars['String']['output']>;
  searchBarName?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/searchBar) */
export type SearchBarLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/searchBar) */
export type SearchBarOptionsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/searchBar) */
export type SearchBarOptionsLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/searchBar) */
export type SearchBarPlaceholderArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/searchBar) */
export type SearchBarSearchBarNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SearchBarCollection = {
  __typename?: 'SearchBarCollection';
  items: Array<Maybe<SearchBar>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SearchBarFilter = {
  AND?: InputMaybe<Array<InputMaybe<SearchBarFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SearchBarFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  optionsLabel?: InputMaybe<Scalars['String']['input']>;
  optionsLabel_contains?: InputMaybe<Scalars['String']['input']>;
  optionsLabel_exists?: InputMaybe<Scalars['Boolean']['input']>;
  optionsLabel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  optionsLabel_not?: InputMaybe<Scalars['String']['input']>;
  optionsLabel_not_contains?: InputMaybe<Scalars['String']['input']>;
  optionsLabel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  options_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  options_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  options_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  options_exists?: InputMaybe<Scalars['Boolean']['input']>;
  placeholder?: InputMaybe<Scalars['String']['input']>;
  placeholder_contains?: InputMaybe<Scalars['String']['input']>;
  placeholder_exists?: InputMaybe<Scalars['Boolean']['input']>;
  placeholder_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  placeholder_not?: InputMaybe<Scalars['String']['input']>;
  placeholder_not_contains?: InputMaybe<Scalars['String']['input']>;
  placeholder_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  searchBarName?: InputMaybe<Scalars['String']['input']>;
  searchBarName_contains?: InputMaybe<Scalars['String']['input']>;
  searchBarName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  searchBarName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  searchBarName_not?: InputMaybe<Scalars['String']['input']>;
  searchBarName_not_contains?: InputMaybe<Scalars['String']['input']>;
  searchBarName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type SearchBarLinkingCollections = {
  __typename?: 'SearchBarLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  pageSectionCollection?: Maybe<PageSectionCollection>;
};


export type SearchBarLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SearchBarLinkingCollectionsPageSectionCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SearchBarLinkingCollectionsPageSectionCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SearchBarLinkingCollectionsPageSectionCollectionOrder {
  PageSectionNameAsc = 'pageSectionName_ASC',
  PageSectionNameDesc = 'pageSectionName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SearchBarOrder {
  OptionsLabelAsc = 'optionsLabel_ASC',
  OptionsLabelDesc = 'optionsLabel_DESC',
  PlaceholderAsc = 'placeholder_ASC',
  PlaceholderDesc = 'placeholder_DESC',
  SearchBarNameAsc = 'searchBarName_ASC',
  SearchBarNameDesc = 'searchBarName_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/seoMetadata) */
export type SeoMetadata = Entry & {
  __typename?: 'SeoMetadata';
  contentfulMetadata: ContentfulMetadata;
  linkedFrom?: Maybe<SeoMetadataLinkingCollections>;
  metaDescription?: Maybe<Scalars['String']['output']>;
  openGraphImage?: Maybe<Asset>;
  pageTitle?: Maybe<Scalars['String']['output']>;
  sys: Sys;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/seoMetadata) */
export type SeoMetadataLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/seoMetadata) */
export type SeoMetadataMetaDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/seoMetadata) */
export type SeoMetadataOpenGraphImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/seoMetadata) */
export type SeoMetadataPageTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type SeoMetadataCollection = {
  __typename?: 'SeoMetadataCollection';
  items: Array<Maybe<SeoMetadata>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type SeoMetadataFilter = {
  AND?: InputMaybe<Array<InputMaybe<SeoMetadataFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<SeoMetadataFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaDescription_contains?: InputMaybe<Scalars['String']['input']>;
  metaDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaDescription_not?: InputMaybe<Scalars['String']['input']>;
  metaDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  pageTitle_contains?: InputMaybe<Scalars['String']['input']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type SeoMetadataLinkingCollections = {
  __typename?: 'SeoMetadataLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
  generalPageCollection?: Maybe<GeneralPageCollection>;
};


export type SeoMetadataLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};


export type SeoMetadataLinkingCollectionsGeneralPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Array<InputMaybe<SeoMetadataLinkingCollectionsGeneralPageCollectionOrder>>>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum SeoMetadataLinkingCollectionsGeneralPageCollectionOrder {
  PageNameAsc = 'pageName_ASC',
  PageNameDesc = 'pageName_DESC',
  PageSlugAsc = 'pageSlug_ASC',
  PageSlugDesc = 'pageSlug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export enum SeoMetadataOrder {
  MetaDescriptionAsc = 'metaDescription_ASC',
  MetaDescriptionDesc = 'metaDescription_DESC',
  PageTitleAsc = 'pageTitle_ASC',
  PageTitleDesc = 'pageTitle_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type Sys = {
  __typename?: 'Sys';
  environmentId: Scalars['String']['output'];
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['String']['output'];
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  publishedVersion?: Maybe<Scalars['Int']['output']>;
  spaceId: Scalars['String']['output'];
};

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  firstPublishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  id?: InputMaybe<Scalars['String']['input']>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_exists?: InputMaybe<Scalars['Boolean']['input']>;
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  id_not?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>;
  publishedAt_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  publishedVersion?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>;
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>;
  publishedVersion_not_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/testContent) */
export type TestContent = Entry & {
  __typename?: 'TestContent';
  authors?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  blog?: Maybe<TestContentBlog>;
  body?: Maybe<TestContentBody>;
  contentfulMetadata: ContentfulMetadata;
  datePublished?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  isFeatured?: Maybe<Scalars['Boolean']['output']>;
  linkedFrom?: Maybe<TestContentLinkingCollections>;
  mainImage?: Maybe<Asset>;
  metaAbout?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  sys: Sys;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/testContent) */
export type TestContentAuthorsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/testContent) */
export type TestContentBlogArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/testContent) */
export type TestContentBodyArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/testContent) */
export type TestContentDatePublishedArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/testContent) */
export type TestContentDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/testContent) */
export type TestContentIsFeaturedArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/testContent) */
export type TestContentLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/testContent) */
export type TestContentMainImageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/testContent) */
export type TestContentMetaAboutArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/testContent) */
export type TestContentNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/testContent) */
export type TestContentSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};


/** [See type definition](https://app.contentful.com/spaces/5osmwku1bn9f/content_types/testContent) */
export type TestContentTagsArgs = {
  locale?: InputMaybe<Scalars['String']['input']>;
};

export type TestContentBlog = {
  __typename?: 'TestContentBlog';
  json: Scalars['JSON']['output'];
  links: TestContentBlogLinks;
};

export type TestContentBlogAssets = {
  __typename?: 'TestContentBlogAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TestContentBlogEntries = {
  __typename?: 'TestContentBlogEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TestContentBlogLinks = {
  __typename?: 'TestContentBlogLinks';
  assets: TestContentBlogAssets;
  entries: TestContentBlogEntries;
  resources: TestContentBlogResources;
};

export type TestContentBlogResources = {
  __typename?: 'TestContentBlogResources';
  block: Array<TestContentBlogResourcesBlock>;
  hyperlink: Array<TestContentBlogResourcesHyperlink>;
  inline: Array<TestContentBlogResourcesInline>;
};

export type TestContentBlogResourcesBlock = ResourceLink & {
  __typename?: 'TestContentBlogResourcesBlock';
  sys: ResourceSys;
};

export type TestContentBlogResourcesHyperlink = ResourceLink & {
  __typename?: 'TestContentBlogResourcesHyperlink';
  sys: ResourceSys;
};

export type TestContentBlogResourcesInline = ResourceLink & {
  __typename?: 'TestContentBlogResourcesInline';
  sys: ResourceSys;
};

export type TestContentBody = {
  __typename?: 'TestContentBody';
  json: Scalars['JSON']['output'];
  links: TestContentBodyLinks;
};

export type TestContentBodyAssets = {
  __typename?: 'TestContentBodyAssets';
  block: Array<Maybe<Asset>>;
  hyperlink: Array<Maybe<Asset>>;
};

export type TestContentBodyEntries = {
  __typename?: 'TestContentBodyEntries';
  block: Array<Maybe<Entry>>;
  hyperlink: Array<Maybe<Entry>>;
  inline: Array<Maybe<Entry>>;
};

export type TestContentBodyLinks = {
  __typename?: 'TestContentBodyLinks';
  assets: TestContentBodyAssets;
  entries: TestContentBodyEntries;
  resources: TestContentBodyResources;
};

export type TestContentBodyResources = {
  __typename?: 'TestContentBodyResources';
  block: Array<TestContentBodyResourcesBlock>;
  hyperlink: Array<TestContentBodyResourcesHyperlink>;
  inline: Array<TestContentBodyResourcesInline>;
};

export type TestContentBodyResourcesBlock = ResourceLink & {
  __typename?: 'TestContentBodyResourcesBlock';
  sys: ResourceSys;
};

export type TestContentBodyResourcesHyperlink = ResourceLink & {
  __typename?: 'TestContentBodyResourcesHyperlink';
  sys: ResourceSys;
};

export type TestContentBodyResourcesInline = ResourceLink & {
  __typename?: 'TestContentBodyResourcesInline';
  sys: ResourceSys;
};

export type TestContentCollection = {
  __typename?: 'TestContentCollection';
  items: Array<Maybe<TestContent>>;
  limit: Scalars['Int']['output'];
  skip: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type TestContentFilter = {
  AND?: InputMaybe<Array<InputMaybe<TestContentFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TestContentFilter>>>;
  authors_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authors_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authors_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  authors_exists?: InputMaybe<Scalars['Boolean']['input']>;
  blog_contains?: InputMaybe<Scalars['String']['input']>;
  blog_exists?: InputMaybe<Scalars['Boolean']['input']>;
  blog_not_contains?: InputMaybe<Scalars['String']['input']>;
  body_contains?: InputMaybe<Scalars['String']['input']>;
  body_exists?: InputMaybe<Scalars['Boolean']['input']>;
  body_not_contains?: InputMaybe<Scalars['String']['input']>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  datePublished?: InputMaybe<Scalars['DateTime']['input']>;
  datePublished_exists?: InputMaybe<Scalars['Boolean']['input']>;
  datePublished_gt?: InputMaybe<Scalars['DateTime']['input']>;
  datePublished_gte?: InputMaybe<Scalars['DateTime']['input']>;
  datePublished_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  datePublished_lt?: InputMaybe<Scalars['DateTime']['input']>;
  datePublished_lte?: InputMaybe<Scalars['DateTime']['input']>;
  datePublished_not?: InputMaybe<Scalars['DateTime']['input']>;
  datePublished_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_contains?: InputMaybe<Scalars['String']['input']>;
  description_exists?: InputMaybe<Scalars['Boolean']['input']>;
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  description_not?: InputMaybe<Scalars['String']['input']>;
  description_not_contains?: InputMaybe<Scalars['String']['input']>;
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isFeatured?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured_exists?: InputMaybe<Scalars['Boolean']['input']>;
  isFeatured_not?: InputMaybe<Scalars['Boolean']['input']>;
  mainImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaAbout?: InputMaybe<Scalars['String']['input']>;
  metaAbout_contains?: InputMaybe<Scalars['String']['input']>;
  metaAbout_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaAbout_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaAbout_not?: InputMaybe<Scalars['String']['input']>;
  metaAbout_not_contains?: InputMaybe<Scalars['String']['input']>;
  metaAbout_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_exists?: InputMaybe<Scalars['Boolean']['input']>;
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  name_not?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug?: InputMaybe<Scalars['String']['input']>;
  slug_contains?: InputMaybe<Scalars['String']['input']>;
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>;
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  slug_not?: InputMaybe<Scalars['String']['input']>;
  slug_not_contains?: InputMaybe<Scalars['String']['input']>;
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
  tags_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestContentLinkingCollections = {
  __typename?: 'TestContentLinkingCollections';
  entryCollection?: Maybe<EntryCollection>;
};


export type TestContentLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  locale?: InputMaybe<Scalars['String']['input']>;
  preview?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
};

export enum TestContentOrder {
  DatePublishedAsc = 'datePublished_ASC',
  DatePublishedDesc = 'datePublished_DESC',
  IsFeaturedAsc = 'isFeatured_ASC',
  IsFeaturedDesc = 'isFeatured_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC'
}

export type _Node = {
  _id: Scalars['ID']['output'];
};

export type CfCustomerTestimonialCardNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfCustomerTestimonialCardNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfCustomerTestimonialCardNestedFilter>>>;
  company?: InputMaybe<Scalars['String']['input']>;
  company_contains?: InputMaybe<Scalars['String']['input']>;
  company_exists?: InputMaybe<Scalars['Boolean']['input']>;
  company_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  company_not?: InputMaybe<Scalars['String']['input']>;
  company_not_contains?: InputMaybe<Scalars['String']['input']>;
  company_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  customerName?: InputMaybe<Scalars['String']['input']>;
  customerName_contains?: InputMaybe<Scalars['String']['input']>;
  customerName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  customerName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  customerName_not?: InputMaybe<Scalars['String']['input']>;
  customerName_not_contains?: InputMaybe<Scalars['String']['input']>;
  customerName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  isPopUp?: InputMaybe<Scalars['Boolean']['input']>;
  isPopUp_exists?: InputMaybe<Scalars['Boolean']['input']>;
  isPopUp_not?: InputMaybe<Scalars['Boolean']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  link_contains?: InputMaybe<Scalars['String']['input']>;
  link_exists?: InputMaybe<Scalars['Boolean']['input']>;
  link_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  link_not?: InputMaybe<Scalars['String']['input']>;
  link_not_contains?: InputMaybe<Scalars['String']['input']>;
  link_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  logo_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
  testimonial?: InputMaybe<Scalars['String']['input']>;
  testimonialCardName?: InputMaybe<Scalars['String']['input']>;
  testimonialCardName_contains?: InputMaybe<Scalars['String']['input']>;
  testimonialCardName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  testimonialCardName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  testimonialCardName_not?: InputMaybe<Scalars['String']['input']>;
  testimonialCardName_not_contains?: InputMaybe<Scalars['String']['input']>;
  testimonialCardName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  testimonial_contains?: InputMaybe<Scalars['String']['input']>;
  testimonial_exists?: InputMaybe<Scalars['Boolean']['input']>;
  testimonial_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  testimonial_not?: InputMaybe<Scalars['String']['input']>;
  testimonial_not_contains?: InputMaybe<Scalars['String']['input']>;
  testimonial_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  titleposition?: InputMaybe<Scalars['String']['input']>;
  titleposition_contains?: InputMaybe<Scalars['String']['input']>;
  titleposition_exists?: InputMaybe<Scalars['Boolean']['input']>;
  titleposition_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  titleposition_not?: InputMaybe<Scalars['String']['input']>;
  titleposition_not_contains?: InputMaybe<Scalars['String']['input']>;
  titleposition_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CfPageSectionNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfPageSectionNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfPageSectionNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  pageSectionName?: InputMaybe<Scalars['String']['input']>;
  pageSectionName_contains?: InputMaybe<Scalars['String']['input']>;
  pageSectionName_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageSectionName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageSectionName_not?: InputMaybe<Scalars['String']['input']>;
  pageSectionName_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageSectionName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageSectionPartsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>;
  sys?: InputMaybe<SysFilter>;
};

export type CfSeoMetadataNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfSeoMetadataNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfSeoMetadataNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  metaDescription?: InputMaybe<Scalars['String']['input']>;
  metaDescription_contains?: InputMaybe<Scalars['String']['input']>;
  metaDescription_exists?: InputMaybe<Scalars['Boolean']['input']>;
  metaDescription_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  metaDescription_not?: InputMaybe<Scalars['String']['input']>;
  metaDescription_not_contains?: InputMaybe<Scalars['String']['input']>;
  metaDescription_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  openGraphImage_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageTitle?: InputMaybe<Scalars['String']['input']>;
  pageTitle_contains?: InputMaybe<Scalars['String']['input']>;
  pageTitle_exists?: InputMaybe<Scalars['Boolean']['input']>;
  pageTitle_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  pageTitle_not?: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_contains?: InputMaybe<Scalars['String']['input']>;
  pageTitle_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  sys?: InputMaybe<SysFilter>;
};

export type CfpageSectionPartsMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfpageSectionPartsMultiTypeNestedFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<CfpageSectionPartsMultiTypeNestedFilter>>>;
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>;
  sys?: InputMaybe<SysFilter>;
};

export type BlogFieldsFragment = { __typename: 'Blog', blogName?: string | null, blogSlug?: string | null, metaAbout?: string | null, authors?: Array<string | null> | null, tags?: Array<string | null> | null, datePublished?: any | null, sys: { __typename?: 'Sys', id: string }, mainImage?: (
    { __typename?: 'Asset' }
    & ContentfulImgFieldsFragment
  ) | null, blogContent?: { __typename: 'BlogBlogContent', json: any, links: (
      { __typename?: 'BlogBlogContentLinks' }
      & BlogLinksFieldsFragment
    ) } | null };

export type BlogLinksFieldsFragment = { __typename: 'BlogBlogContentLinks', entries: { __typename: 'BlogBlogContentEntries', inline: Array<{ __typename: 'Blog', sys: { __typename: 'Sys', id: string } } | { __typename: 'BlogPage', sys: { __typename: 'Sys', id: string } } | { __typename: 'Blogs', sys: { __typename: 'Sys', id: string } } | { __typename: 'CodeBlock', sys: { __typename: 'Sys', id: string } } | { __typename: 'CustomerTestimonialCard', sys: { __typename: 'Sys', id: string } } | { __typename: 'CustomersSection', sys: { __typename: 'Sys', id: string } } | { __typename: 'GeneralContentCard', sys: { __typename: 'Sys', id: string } } | { __typename: 'GeneralPage', sys: { __typename: 'Sys', id: string } } | { __typename: 'PageSection', sys: { __typename: 'Sys', id: string } } | { __typename: 'SearchBar', sys: { __typename: 'Sys', id: string } } | { __typename: 'SeoMetadata', sys: { __typename: 'Sys', id: string } } | { __typename: 'TestContent', sys: { __typename: 'Sys', id: string } } | null>, hyperlink: Array<{ __typename: 'Blog', blogName?: string | null, blogSlug?: string | null, sys: { __typename: 'Sys', id: string } } | { __typename: 'BlogPage', sys: { __typename: 'Sys', id: string } } | { __typename: 'Blogs', sys: { __typename: 'Sys', id: string } } | { __typename: 'CodeBlock', sys: { __typename: 'Sys', id: string } } | { __typename: 'CustomerTestimonialCard', sys: { __typename: 'Sys', id: string } } | { __typename: 'CustomersSection', sys: { __typename: 'Sys', id: string } } | { __typename: 'GeneralContentCard', sys: { __typename: 'Sys', id: string } } | { __typename: 'GeneralPage', pageName?: string | null, pageSlug?: string | null, sys: { __typename: 'Sys', id: string } } | { __typename: 'PageSection', sys: { __typename: 'Sys', id: string } } | { __typename: 'SearchBar', sys: { __typename: 'Sys', id: string } } | { __typename: 'SeoMetadata', sys: { __typename: 'Sys', id: string } } | { __typename: 'TestContent', sys: { __typename: 'Sys', id: string } } | null>, block: Array<{ __typename: 'Blog', sys: { __typename: 'Sys', id: string } } | { __typename: 'BlogPage', sys: { __typename: 'Sys', id: string } } | { __typename: 'Blogs', sys: { __typename: 'Sys', id: string } } | { __typename: 'CodeBlock', language?: string | null, code?: string | null, sys: { __typename: 'Sys', id: string } } | { __typename: 'CustomerTestimonialCard', sys: { __typename: 'Sys', id: string } } | { __typename: 'CustomersSection', sys: { __typename: 'Sys', id: string } } | { __typename: 'GeneralContentCard', sys: { __typename: 'Sys', id: string } } | { __typename: 'GeneralPage', sys: { __typename: 'Sys', id: string } } | { __typename: 'PageSection', sys: { __typename: 'Sys', id: string } } | { __typename: 'SearchBar', sys: { __typename: 'Sys', id: string } } | { __typename: 'SeoMetadata', sys: { __typename: 'Sys', id: string } } | { __typename: 'TestContent', sys: { __typename: 'Sys', id: string } } | null> }, assets: { __typename: 'BlogBlogContentAssets', hyperlink: Array<{ __typename: 'Asset', title?: string | null, url?: string | null, sys: { __typename?: 'Sys', id: string } } | null>, block: Array<{ __typename: 'Asset', title?: string | null, url?: string | null, description?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } } | null> } };

export type GetAllBlogPathsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllBlogPathsQuery = { __typename?: 'Query', blogCollection?: { __typename?: 'BlogCollection', items: Array<{ __typename?: 'Blog', blogSlug?: string | null } | null> } | null };

export type GetBlogPageDataQueryVariables = Exact<{
  preview: Scalars['Boolean']['input'];
  slug: Scalars['String']['input'];
}>;


export type GetBlogPageDataQuery = { __typename?: 'Query', blogCollection?: { __typename: 'BlogCollection', items: Array<(
      { __typename?: 'Blog' }
      & BlogFieldsFragment
    ) | null> } | null };

export type GetRelatedBlogsQueryVariables = Exact<{
  preview: Scalars['Boolean']['input'];
  slug: Scalars['String']['input'];
}>;


export type GetRelatedBlogsQuery = { __typename?: 'Query', blogCollection?: { __typename: 'BlogCollection', items: Array<(
      { __typename?: 'Blog' }
      & RelatedBlogArticleFragment
    ) | null> } | null };

export type RelatedBlogArticleFragment = { __typename: 'Blog', blogName?: string | null, blogSlug?: string | null, tags?: Array<string | null> | null, datePublished?: any | null, sys: { __typename?: 'Sys', id: string }, mainImage?: (
    { __typename?: 'Asset' }
    & ContentfulImgFieldsFragment
  ) | null };

export type GetGraphQlErrorResponseQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGraphQlErrorResponseQuery = { __typename?: 'Query', blogCollection?: { __typename?: 'BlogCollection', items: Array<{ __typename?: 'Blog', blogName?: string | null } | null> } | null };

export type GetHomePageDataQueryVariables = Exact<{
  preview: Scalars['Boolean']['input'];
}>;


export type GetHomePageDataQuery = { __typename?: 'Query', generalPage?: { __typename: 'GeneralPage', pageSlug?: string | null, sys: { __typename?: 'Sys', id: string }, pageMetadata?: { __typename: 'SeoMetadata', pageTitle?: string | null, metaDescription?: string | null, sys: { __typename?: 'Sys', id: string } } | null, pageSectionCollection?: { __typename: 'GeneralPagePageSectionCollection', items: Array<{ __typename: 'PageSection', sys: { __typename?: 'Sys', id: string }, pageSectionPartsCollection?: { __typename: 'PageSectionPageSectionPartsCollection', items: Array<{ __typename: 'Blogs' } | { __typename: 'CustomersSection', sys: { __typename?: 'Sys', id: string }, selectCustomerLogosCollection?: { __typename: 'AssetCollection', items: Array<{ __typename: 'Asset', url?: string | null, description?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } } | null> } | null, selectTestimonialsCollection?: { __typename: 'CustomersSectionSelectTestimonialsCollection', items: Array<{ __typename: 'CustomerTestimonialCard', testimonial?: string | null, customerName?: string | null, titleposition?: string | null, sys: { __typename?: 'Sys', id: string }, logo?: { __typename: 'Asset', url?: string | null, description?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } } | null } | null> } | null } | (
            { __typename: 'GeneralContentCard' }
            & HomeGeneralContentCardFragment
          ) | { __typename: 'SearchBar' } | null> } | null } | null> } | null } | null };

export type GetOpenSourcePageDataQueryVariables = Exact<{
  preview: Scalars['Boolean']['input'];
}>;


export type GetOpenSourcePageDataQuery = { __typename?: 'Query', generalPage?: { __typename: 'GeneralPage', sys: { __typename?: 'Sys', id: string }, pageMetadata?: { __typename: 'SeoMetadata', pageTitle?: string | null, metaDescription?: string | null, sys: { __typename?: 'Sys', id: string }, openGraphImage?: (
        { __typename?: 'Asset' }
        & ContentfulImgFieldsFragment
      ) | null } | null, pageSectionCollection?: { __typename?: 'GeneralPagePageSectionCollection', items: Array<{ __typename: 'PageSection', pageSectionName?: string | null, sys: { __typename?: 'Sys', id: string }, pageSectionPartsCollection?: { __typename?: 'PageSectionPageSectionPartsCollection', items: Array<{ __typename: 'Blogs' } | { __typename: 'CustomersSection' } | (
            { __typename: 'GeneralContentCard' }
            & OpenSourcePageGcFragment
          ) | { __typename: 'SearchBar' } | null> } | null } | null> } | null } | null };

export type ContentfulImgFieldsFragment = { __typename: 'Asset', url?: string | null, description?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } };

export type OpenSourcePageGcFragment = { __typename: 'GeneralContentCard', pageSectionName?: string | null, heading?: string | null, subheading?: string | null, descriptionText?: string | null, ctas?: any | null, sys: { __typename?: 'Sys', id: string }, mediaCollection?: { __typename?: 'AssetCollection', items: Array<(
      { __typename?: 'Asset' }
      & ContentfulImgFieldsFragment
    ) | null> } | null };

export type GetTestPageDataQueryVariables = Exact<{
  preview: Scalars['Boolean']['input'];
}>;


export type GetTestPageDataQuery = { __typename?: 'Query', generalPage?: { __typename: 'GeneralPage', pageSlug?: string | null, sys: { __typename?: 'Sys', id: string }, pageMetadata?: { __typename: 'SeoMetadata', pageTitle?: string | null, metaDescription?: string | null, sys: { __typename?: 'Sys', id: string }, openGraphImage?: (
        { __typename?: 'Asset' }
        & ContentfulImgFieldsFragment
      ) | null } | null, pageSectionCollection?: { __typename?: 'GeneralPagePageSectionCollection', items: Array<{ __typename: 'PageSection', pageSectionName?: string | null, sys: { __typename?: 'Sys', id: string }, pageSectionPartsCollection?: { __typename?: 'PageSectionPageSectionPartsCollection', items: Array<{ __typename: 'Blogs' } | { __typename: 'CustomersSection' } | (
            { __typename: 'GeneralContentCard' }
            & TestPageHeroSectionFragment
          ) | { __typename: 'SearchBar' } | null> } | null } | null> } | null } | null };

export type TestPageHeroSectionFragment = { __typename: 'GeneralContentCard', pageSectionName?: string | null, heading?: string | null, subheading?: string | null, sys: { __typename?: 'Sys', id: string }, mediaCollection?: { __typename?: 'AssetCollection', items: Array<(
      { __typename?: 'Asset' }
      & ContentfulImgFieldsFragment
    ) | null> } | null };

export type GetUnchainedPageDataQueryVariables = Exact<{
  preview: Scalars['Boolean']['input'];
}>;


export type GetUnchainedPageDataQuery = { __typename?: 'Query', generalPage?: { __typename: 'GeneralPage', pageSlug?: string | null, sys: { __typename?: 'Sys', id: string }, pageMetadata?: { __typename: 'SeoMetadata', pageTitle?: string | null, metaDescription?: string | null, sys: { __typename?: 'Sys', id: string } } | null, pageSectionCollection?: { __typename: 'GeneralPagePageSectionCollection', items: Array<{ __typename: 'PageSection', sys: { __typename?: 'Sys', id: string }, pageSectionPartsCollection?: { __typename: 'PageSectionPageSectionPartsCollection', items: Array<{ __typename: 'Blogs', sys: { __typename?: 'Sys', id: string }, featuredBlogsCollection?: { __typename?: 'BlogsFeaturedBlogsCollection', items: Array<(
                { __typename?: 'Blog' }
                & UnchainedFeaturedBlogsFragment
              ) | { __typename?: 'BlogPage' } | { __typename?: 'Blogs' } | { __typename?: 'CodeBlock' } | { __typename?: 'CustomerTestimonialCard' } | { __typename?: 'CustomersSection' } | { __typename?: 'GeneralContentCard' } | { __typename?: 'GeneralPage' } | { __typename?: 'PageSection' } | { __typename?: 'SearchBar' } | { __typename?: 'SeoMetadata' } | { __typename?: 'TestContent' } | null> } | null } | { __typename: 'CustomersSection' } | (
            { __typename: 'GeneralContentCard' }
            & HomeGeneralContentCardFragment
          ) | { __typename: 'SearchBar' } | null> } | null } | null> } | null } | null };

export type HomeGeneralContentCardFragment = { __typename: 'GeneralContentCard', heading?: string | null, subheading?: string | null, ctas?: any | null, descriptionText?: string | null, sys: { __typename?: 'Sys', id: string }, mediaCollection?: { __typename: 'AssetCollection', items: Array<{ __typename: 'Asset', url?: string | null, description?: string | null, width?: number | null, height?: number | null, sys: { __typename?: 'Sys', id: string } } | null> } | null };

export type UnchainedFeaturedBlogsFragment = { __typename: 'Blog', blogName?: string | null, blogSlug?: string | null, metaAbout?: string | null, authors?: Array<string | null> | null, tags?: Array<string | null> | null, datePublished?: any | null, sys: { __typename?: 'Sys', id: string }, mainImage?: (
    { __typename?: 'Asset' }
    & ContentfulImgFieldsFragment
  ) | null };

export const ContentfulImgFieldsFragmentDoc = gql`
    fragment ContentfulImgFields on Asset {
  __typename
  sys {
    id
  }
  url
  description
  width
  height
}
    `;
export const BlogLinksFieldsFragmentDoc = gql`
    fragment BlogLinksFields on BlogBlogContentLinks {
  __typename
  entries {
    __typename
    inline {
      sys {
        id
        __typename
      }
      __typename
    }
    hyperlink {
      sys {
        __typename
        id
      }
      __typename
      ... on Blog {
        __typename
        sys {
          id
        }
        blogName
        blogSlug
      }
      ... on GeneralPage {
        __typename
        sys {
          id
        }
        pageName
        pageSlug
      }
    }
    block {
      sys {
        __typename
        id
      }
      __typename
      ... on CodeBlock {
        __typename
        sys {
          id
        }
        language
        code
      }
    }
  }
  assets {
    __typename
    hyperlink {
      sys {
        id
      }
      title
      url
      __typename
    }
    block {
      sys {
        id
      }
      title
      url
      description
      width
      height
      __typename
    }
  }
}
    `;
export const BlogFieldsFragmentDoc = gql`
    fragment BlogFields on Blog {
  __typename
  sys {
    id
  }
  blogName
  blogSlug
  metaAbout
  authors
  tags
  mainImage {
    ...ContentfulImgFields
  }
  datePublished
  blogContent {
    __typename
    json
    links {
      ...BlogLinksFields
    }
  }
}
    `;
export const RelatedBlogArticleFragmentDoc = gql`
    fragment RelatedBlogArticle on Blog {
  __typename
  sys {
    id
  }
  blogName
  blogSlug
  tags
  datePublished
  mainImage {
    ...ContentfulImgFields
  }
}
    `;
export const OpenSourcePageGcFragmentDoc = gql`
    fragment OpenSourcePageGC on GeneralContentCard {
  __typename
  sys {
    id
  }
  pageSectionName
  heading
  subheading
  descriptionText
  mediaCollection(limit: 2) {
    items {
      ...ContentfulImgFields
    }
  }
  ctas
}
    `;
export const TestPageHeroSectionFragmentDoc = gql`
    fragment TestPageHeroSection on GeneralContentCard {
  __typename
  sys {
    id
  }
  pageSectionName
  heading
  subheading
  mediaCollection(limit: 2) {
    items {
      ...ContentfulImgFields
    }
  }
}
    `;
export const HomeGeneralContentCardFragmentDoc = gql`
    fragment HomeGeneralContentCard on GeneralContentCard {
  __typename
  sys {
    id
  }
  heading
  subheading
  ctas
  descriptionText
  mediaCollection(limit: 8) {
    __typename
    items {
      __typename
      sys {
        id
      }
      url
      description
      width
      height
    }
  }
}
    `;
export const UnchainedFeaturedBlogsFragmentDoc = gql`
    fragment UnchainedFeaturedBlogs on Blog {
  __typename
  sys {
    id
  }
  blogName
  blogSlug
  metaAbout
  authors
  tags
  mainImage {
    ...ContentfulImgFields
  }
  datePublished
}
    `;
export const GetAllBlogPathsDocument = gql`
    query getAllBlogPaths {
  blogCollection {
    items {
      blogSlug
    }
  }
}
    `;
export const GetBlogPageDataDocument = gql`
    query getBlogPageData($preview: Boolean!, $slug: String!) {
  blogCollection(preview: $preview, where: {blogSlug: $slug}, limit: 1) {
    __typename
    items {
      ...BlogFields
    }
  }
}
    ${BlogFieldsFragmentDoc}
${ContentfulImgFieldsFragmentDoc}
${BlogLinksFieldsFragmentDoc}`;
export const GetRelatedBlogsDocument = gql`
    query getRelatedBlogs($preview: Boolean!, $slug: String!) {
  blogCollection(preview: $preview, limit: 3, where: {blogSlug_not: $slug}) {
    __typename
    items {
      ...RelatedBlogArticle
    }
  }
}
    ${RelatedBlogArticleFragmentDoc}
${ContentfulImgFieldsFragmentDoc}`;
export const GetGraphQlErrorResponseDocument = gql`
    query getGraphQLErrorResponse {
  blogCollection(where: {blogName: "Tony"}) {
    items {
      blogName
    }
  }
}
    `;
export const GetHomePageDataDocument = gql`
    query getHomePageData($preview: Boolean!) {
  generalPage(id: "4GpCxSdhnotHZfV2tQgKoh", preview: $preview) {
    __typename
    sys {
      id
    }
    pageSlug
    pageMetadata {
      __typename
      sys {
        id
      }
      pageTitle
      metaDescription
    }
    pageSectionCollection(limit: 10) {
      __typename
      items {
        __typename
        sys {
          id
        }
        pageSectionPartsCollection(limit: 6) {
          __typename
          items {
            __typename
            ...HomeGeneralContentCard
            ... on CustomersSection {
              __typename
              sys {
                id
              }
              selectCustomerLogosCollection(limit: 8) {
                __typename
                items {
                  __typename
                  sys {
                    id
                  }
                  url
                  description
                  width
                  height
                }
              }
              selectTestimonialsCollection(limit: 2) {
                __typename
                items {
                  __typename
                  sys {
                    id
                  }
                  logo {
                    __typename
                    sys {
                      id
                    }
                    url
                    description
                    width
                    height
                  }
                  testimonial
                  customerName
                  titleposition
                }
              }
            }
          }
        }
      }
    }
  }
}
    ${HomeGeneralContentCardFragmentDoc}`;
export const GetOpenSourcePageDataDocument = gql`
    query getOpenSourcePageData($preview: Boolean!) {
  generalPage(preview: $preview, id: "6nhKPVtrhOpI6NQ9FGv8ia") {
    __typename
    sys {
      id
    }
    pageMetadata {
      __typename
      sys {
        id
      }
      pageTitle
      metaDescription
      openGraphImage {
        ...ContentfulImgFields
      }
    }
    pageSectionCollection(limit: 10) {
      items {
        __typename
        sys {
          id
        }
        pageSectionName
        pageSectionPartsCollection(limit: 10) {
          items {
            __typename
            ... on GeneralContentCard {
              ...OpenSourcePageGC
            }
          }
        }
      }
    }
  }
}
    ${ContentfulImgFieldsFragmentDoc}
${OpenSourcePageGcFragmentDoc}`;
export const GetTestPageDataDocument = gql`
    query getTestPageData($preview: Boolean!) {
  generalPage(preview: $preview, id: "1BvwiB8PE7WrbubW3zEfAN") {
    __typename
    sys {
      id
    }
    pageSlug
    pageMetadata {
      __typename
      sys {
        id
      }
      pageTitle
      metaDescription
      openGraphImage {
        ...ContentfulImgFields
      }
    }
    pageSectionCollection(limit: 10) {
      items {
        __typename
        sys {
          id
        }
        pageSectionName
        pageSectionPartsCollection(limit: 10) {
          items {
            __typename
            ... on GeneralContentCard {
              ...TestPageHeroSection
            }
          }
        }
      }
    }
  }
}
    ${ContentfulImgFieldsFragmentDoc}
${TestPageHeroSectionFragmentDoc}`;
export const GetUnchainedPageDataDocument = gql`
    query getUnchainedPageData($preview: Boolean!) {
  generalPage(id: "3LsilfHAYjrs43IFfpCAdN", preview: $preview) {
    __typename
    sys {
      id
    }
    pageSlug
    pageMetadata {
      __typename
      sys {
        id
      }
      pageTitle
      metaDescription
    }
    pageSectionCollection(limit: 10) {
      __typename
      items {
        __typename
        sys {
          id
        }
        pageSectionPartsCollection(limit: 6) {
          __typename
          items {
            __typename
            ...HomeGeneralContentCard
            ... on Blogs {
              __typename
              sys {
                id
              }
              featuredBlogsCollection(limit: 2) {
                items {
                  ...UnchainedFeaturedBlogs
                }
              }
            }
          }
        }
      }
    }
  }
}
    ${HomeGeneralContentCardFragmentDoc}
${UnchainedFeaturedBlogsFragmentDoc}
${ContentfulImgFieldsFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getAllBlogPaths(variables?: GetAllBlogPathsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllBlogPathsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllBlogPathsQuery>(GetAllBlogPathsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getAllBlogPaths', 'query');
    },
    getBlogPageData(variables: GetBlogPageDataQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetBlogPageDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetBlogPageDataQuery>(GetBlogPageDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getBlogPageData', 'query');
    },
    getRelatedBlogs(variables: GetRelatedBlogsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetRelatedBlogsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetRelatedBlogsQuery>(GetRelatedBlogsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getRelatedBlogs', 'query');
    },
    getGraphQLErrorResponse(variables?: GetGraphQlErrorResponseQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetGraphQlErrorResponseQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetGraphQlErrorResponseQuery>(GetGraphQlErrorResponseDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getGraphQLErrorResponse', 'query');
    },
    getHomePageData(variables: GetHomePageDataQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetHomePageDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetHomePageDataQuery>(GetHomePageDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getHomePageData', 'query');
    },
    getOpenSourcePageData(variables: GetOpenSourcePageDataQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetOpenSourcePageDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetOpenSourcePageDataQuery>(GetOpenSourcePageDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getOpenSourcePageData', 'query');
    },
    getTestPageData(variables: GetTestPageDataQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetTestPageDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTestPageDataQuery>(GetTestPageDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getTestPageData', 'query');
    },
    getUnchainedPageData(variables: GetUnchainedPageDataQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUnchainedPageDataQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetUnchainedPageDataQuery>(GetUnchainedPageDataDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getUnchainedPageData', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;