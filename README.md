# React MegaCustomDropdownInput

It is an input with a dropdown. 

It gets triggered on focus.

It requires bootstrap 4.

## Props

* values -> is an array and it will be shown as options in the dropdown
```
const options1 = [
      { id: 1, label: 'John' },
      { id: 2, label: 'Miles' },
      { id: 3, label: 'Charles' },
      { id: 4, label: 'Herbie' },
    ];
```
* handleChange -> gets called everytime the user tipes on the input
* handleSelected -> gets called everytime the user clicks on a dropdown option


## Usage

```
<MegaCustomDropdownInput values={options1} handleSelected={this.handleSelected} handleChange={this.handleChange} />
```