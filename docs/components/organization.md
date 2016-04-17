# Organization (`seo-organization`)

## Syntax

```html
<seo-organization
  url="http://company.com"
  logo="http://image.com/image.png"
  name="My awsome company"
  :contacts="[]"
  :social-accounts="[]"
  :alternate-name="Other name"
></seo-organization>
```

## Props

- __name__: The name of the organization
- __url__: The url of the website for this organization
- __logo__: The logo of this company
- __contacts__: Array of contacts for this organization, see [THIS](https://developers.google.com/structured-data/customize/contact-points#company_phone_numbers#adding_structured_markup_to_your_site)
- __socialAccounts__: And array of social account page (facebook, youtube, linkedin...)
- __alternateName__: The alternate name of your organization/Website
- __enableWebsite__: [Bool] (advanded) Does this tag describe your website
- __enableOrganization__: [Bool] (advanded) Does this tag describe your organization

## Impact

- __Google__:
  - Display a box describing your company on the right pane
  - Show your logo on the right pane
  - Add social links on the right pane
  - Set friendly name for your search results
  - Add contact phone on the right pane
- __OpenGraph / Facebook share__:
  - Sets the title of your website
  - __important__: For the moment if you want to set the image of your facebook search image you have to use `<seo-image>`

![Examples of impact](https://developers.google.com/structured-data/images/customize-kg.png)
