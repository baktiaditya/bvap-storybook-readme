# Button

### Usage

```jsx
import Button from 'components/Button/Button';
```

<!-- STORY -->

### Properties

* `onClick` - click callback
* `label` - button text

| propName | propType | defaultValue | isRequired |
|----------|----------|--------------|------------|
| onClick  | func     | -            |            |
| alert    | boolean   | false           | -          |
| success    | boolean   | false           | -          |


### Roadmap

#### Icons

```jsx
{
  components: { Button },
  template: `<button icon="mail">Send mail</button>`
}

{
  components: { Button },
  template: `<button icon="trash" iconPosition="right">Send mail</button>`
}
```

#### Value

Add `value` property that will be available at all event callback. Helps to prevent numbers of bind usage

For example:

```jsx
{
  components: { Button },
  template: `<button v-on:click=={remove} value={item.id}>Remove</button>`
}
```
