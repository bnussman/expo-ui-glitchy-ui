## Description

When an `@expo/ui` iOS Context Menu is present, and a ScrollView is conditonally rendered, items in the ScrollView will visually glitch (become an unexpected size).

https://github.com/user-attachments/assets/c41f06b2-19e5-43e7-9ae8-e4160f13a196

## How to run this app

> [!important]
> You need to run this repro on a native build that has `@expo/ui` installed because `@expo/ui` uses native code

I did this by using a development build in my iOS simulator.

```sh
eas build --profile simulator --platform ios
```

