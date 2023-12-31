# Nova Rating field

A **Star rating field** to use in your Laravel Nova apps. 
This package is highly based on [nikaia/nova-rating-field](https://github.com/nikaia/nova-rating-field) thas is incompatible with Nova4 and looks unmaintained for a while.

This README was written by the original author and we just copy it here and change the package and field name.

Uses [vue-star-rating](https://github.com/craigh411/vue-star-rating). 

[![Latest Version on Packagist](https://img.shields.io/packagist/v/operativeit/nova-rating-field.svg?style=flat-square)](https://packagist.org/packages/operativeit/nova-rating-field)
[![Total Downloads](https://img.shields.io/packagist/dt/operativeit/nova-rating-field.svg?style=flat-square)](https://packagist.org/packages/operativeit/nova-rating-field)
![GitHub forks](https://img.shields.io/github/forks/operativeit/nova-rating-field)
![GitHub issues](https://img.shields.io/github/issues/operativeit/nova-rating-field)
[![License](https://img.shields.io/packagist/l/operativeit/nova-rating-field)](https://github.com/operativeit/nova-rating-field/blob/master/LICENSE.md)


![image](https://github.com/operativeit/nova-rating-field/assets/188766/3eb11e60-cfad-4804-829c-ec7db80f14f7)


## Installation

You can install the package in to a Laravel app that uses [Nova](https://nova.laravel.com) via composer:

```bash
composer require eom-plus/nova-rating-field
```

Next you can use the `Eom-Plus\NovaRatingField\Rating` field in your Nova resource.

## Usage

```php
public function fields(Request $request)
{
    return [
        // ...

        Rating::make('Rating')->min(0)->max(5)->increment(0.5)->hideFromIndex(),
        
        // Defining a custom style for the index page.
        Rating::make('Rating')->min(0)->max(5)->increment(0.5)->hideRating()
            ->withStyles([
                'star-size' => 15,
                'rounded-corners' => true,
            ])->onlyOnIndex()->sortable(),

        // ...    
        
    ];
}
```

### Defining properties

```php
public function fields(Request $request)
{
    Rating::make('Rating')
    
        // Miniumum rating (default: 0)
        ->min(0) 
        
        // Maximum rating (default: 5)
        // This is how the component knows how many stars it should display.
        ->max(5)
        
        // Incremet (default: 1)
        // Can be float. The underlying eloquent colum must be defined as float in that case.
        // ie. 0.5 for half stars or 0.01 for fluid stars.
        ->increment(0.5)
        
        // Show rating value next to the stars
        ->hideRating()
        
}
```

### Customizing styles

You can style the component using `withStyles` method. Options are passed to the the underlying [vue component style props](https://github.com/craigh411/vue-star-rating#style-props). 

Default values are :

```php
public function fields(Request $request)
{
    Rating::make('Rating')
        ->withStyles([
            'star-size' => 30,
            'active-color' => 'var(--primary)', // Primary nova theme color.
            'inactive-color' => '#d8d8d8',
            'border-color' => 'var(--60)',
            'border-width' => 0,
            'padding' => 10,
            'rounded-corners' => false,
            'inline' => false,
            'glow' => 0,
            'glow-color' => '#fff',
            'text-class' => 'inline-block text-80 h-9 pt-2',
        ]);
}
```

## ⭐️ Show Your Support

Please give a ⭐️ if this project helped you!

### Other Packages You Might Like

- [Nova Rating Field](https://github.com/operativeit/nova-rating-field) - A Star rating Nova 4 field to use in your Laravel Nova apps.
- [Nova Feedback Field](https://github.com/operativeit/nova-feedback-field) - An Emoji feedback Nova 4 field to use in your Laravel Nova apps.
- [Nova Input Group](https://github.com/operativeit/nova-input-group) - A Laravel Nova 4 text field formatted as input group
- [Nova Signature](https://github.com/operativeit/nova-signature) - A Laravel Nova 4 signature pad
 
Take a look to our Github repositories as we have a lot of forked nova components with fixes that are still not merge into main owner branch.

## License

The MIT License (MIT). Please see [License File](https://github.com/operativeit/nova-rating-field/blob/master/LICENSE.md) for more information.

