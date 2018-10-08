# React CustomDropdownInput

It is an input with a dropdown. 

The dropdown gets triggered on focus.

The input has the bootstrap class form-control but bootstrap is not needed.

## Update

Now the value typed is added to the dropdown so you can select it like an option of the array.

handleChange is not needed anymore since the value typed can be handle with handleSelected, you can still use it but it's optional.

## Demo

[Live demo](https://codesandbox.io/s/7ymvr8yvq1)

## Props

* values -> is an array and it will be shown as options in the dropdown
```es6
const options1 = [
      { id: 1, label: 'John' },
      { id: 2, label: 'Miles' },
      { id: 3, label: 'Charles' },
      { id: 4, label: 'Herbie' },
    ];
```
* handleSelected -> gets called everytime the user clicks on a dropdown option
```es6
 handleSelected = (option) => {
    ///option is the option selected on the dropdown
  }
```

## Optional

* handleChange -> gets called everytime the user types on the input
```es6
handleChange = (value) => {
    //value is the input typed
  }
```

## Usage

```js
<CustomDropdownInput values={options1} handleSelected={this.handleSelected}/>
```