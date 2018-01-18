# Button

Normal application button. 

```jsx
import Button from 'components/Button/Button';
```

<!-- STORY -->

### Flags usage rules

Use **alert** and **success** flags only in these cases:

**alert** - when `onClick` action removes something

```jsx
{
  components: { Button },
  template: `<button alert="true">Remove User</button>`
}
```

**success** - when `onClick` action adds something

```jsx
{
  components: { Button },
  template: `<button success="true">Add User</button>`
}
```