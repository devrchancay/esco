# Button()

Buttons

example

```jsx
{
  /* Default button */
}
<Button
  label="Click me"
  actionClick={() => {
    console.log('Hello world');
  }}
/>;
```

```jsx
{
  /* Button link */
}
<Button
  label="Click me"
  actionClick={() => {
    console.log('Hello world');
  }}
  type="link"
/>;
```

```jsx
{
  /* Button with theme */
}
<Button
  label="Click me"
  actionClick={() => {
    console.log('Hello world');
  }}
  color="secondary"
/>;
```
