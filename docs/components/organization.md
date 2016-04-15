# Organization (`seo-organization`)

## Syntax

```html
<seo-organization
  url="http://company.com"
  logo="http://image.com/image.png"
  name="My awsome company"
  :contacts="[]"
  :social-accounts="[]"
></seo-organization>
```

## Props

- __name__: The name of the organization
- __url__: The url of the website for this organization
- __logo__: The logo of this company
- __contacts__: Array of contacts for this organization, see [THIS](https://developers.google.com/structured-data/customize/contact-points#company_phone_numbers#adding_structured_markup_to_your_site)
- __socialAccounts__: And array of social account page (facebook, youtube, linkedin...)

## Why is this usefull

Add this if you want to have your company description on the right pannel on Google.
