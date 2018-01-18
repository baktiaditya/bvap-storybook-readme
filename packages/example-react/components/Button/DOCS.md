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
<Button alert={true}>Remove user</Button>
```

**success** - when `onClick` action adds something

```jsx
<Button success={true}>Add user</Button>
```
