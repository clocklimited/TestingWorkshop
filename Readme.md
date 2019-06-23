# Testing with ES6 and React Workshop

[![Greenkeeper badge](https://badges.greenkeeper.io/clocklimited/TestingWorkshop.svg)](https://greenkeeper.io/)

## Setup

```
git clone git@github.com:clocklimited/TestingWorkshop.git
cd TestingWorkshop
yarn install
yarn test
```

## Definitions

> **assertion**

> a confident and forceful statement of fact or belief.

## References

* [Node Assert](https://nodejs.org/api/assert.html)
* [enzyme](https://github.com/airbnb/enzyme/tree/master/docs/api)
* [React](https://facebook.github.io/react/docs/components-and-props.html)

## Exercises

### 1. Hello World

1.1 Write a shorthand react `HelloWorld` component that outputs 'Hello World!' in a `p`.

1.2 Write a test to assert the above.

### 2. Properties

2.1 Extend `HelloWorld` to take a property `who` that can be used in place of 'World'.

2.2 Write a test to ensure the above.

2.3 Fix the code until all the test pass.3.

### 3. Children and Conditionals Classes

3.1 Write a new test `Card.test.js` to assert that children are placed inside a new component called Card.

3.2 Write a test to assert the top div of card has a default className of `card`

3.3 Write a test to assert the top div of card gets a modifier called
`card--compact` added if a property `type` is set to `compact`.

3.4 Implement the above code until the test passes.

### 4. Composition

4.1 Write a new test for a `Contact` component that asserts a Contact is made up of a `Card` component containing an `img`, a `header`, and an `a` element.

4.2 Implement a component to pass the above test.

4.3 Write tests asserting that `img` has a className `card__image` and that `img[src]` is set from the the property `imageUrl`. If this isn't present no `img` should output.

4.4 Write a test asserting that `header` contains the required `name` property and that it has the className `card__header`.

4.5 Write a test to assert that `a` only shows when the property `emailAddress` is set and that it has the className `card__link` and `card__link--email`.

4.6 Implement the above until all your tests are passing.

### 5. Iteration

5.1 Make a new empty component `ContactList` that has a `div` with a single `Contact` component inside.

5.2 Write a test to assert that all the children of `ContactList` are `Contact` components.

5.3 Write a test to assert that passing a property of `contacts` to `ContactList` will output each contact as a `Contact` component.

5.4 Implement the above.

5.5 Write a test asserting that a empty `contacts` property will output a simple `p` with the message 'No contacts found'.

5.6 Implment the above.

5.7 Fix the first test in this section.

5.8 Using gravitar set the `imageUrl` for each contact.

### 6. Rendering

6.1 Alter `app.js` in the route to display the contacts list using `contacts.json` as the `contacts` property.
