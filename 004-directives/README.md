# 004 - DIRECTIVES

In this exercise, you'll learn practice creating and working with directives in AngularJS.

We are going to use [Angular Materials][1] for the layout. We'll cover the following subjects:

*  Directive types
*  Isolated scope
*  Prefixes to bind the parent scope’s methods and properties to the directive scope.

If you want more information about directives take a look at [Binding a Directive to a Controller][2].

### To Do
We want to create a business presentation card, so we want to see the preview of the card and see how it changes when the user inputs some custom fields.
* Create a `card` directive and bind the following variables
	* Icon
	* `background`
	* `color`
	* Title
	* Description
	* Hardcoded message
* Create two panels, one to edit the card and the other one to see the result of the card
* When the user modifies any field on the left panel the result should be seen automaticly in the right card panel
* Create a `&` atribute in the `scope` of the directive.
    * `bind` the callback of this attribute to the view controller
    * This should allow the user to mark the card as favorite from the right card panel
    * The result of the callback is a list in the view controller with the list of favorites cards

### Solution

You might notice that the example is not completed - that's part of the challenge! Figure it out and don't forget the best practices! If you've already completed it, take a look at the solution [here][3].

[1]: https://material.angularjs.org/latest/
[2]: https://blog.thoughtram.io/angularjs/2015/01/02/exploring-angular-1.3-bindToController.html
[3]: https://github.com/talosdigital/u-angularjs/tree/solved/003-servers-and-maps