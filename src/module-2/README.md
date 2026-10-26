# Module 2: React components

## Task 1 - React class component

`components/ItemListClass.tsx` renders an input, an "Add" button and a list of items. Items from props are copied into the state in the constructor.

- The input gets the `focused` class on focus and loses it on blur.
- `Escape` clears the input, `Enter` adds a new item and clears the input.
- The "Add" button is disabled while the input is empty.
- Each item is an `li` with its name in a `p` and a "Delete" button.

## Task 2 - React functional component

`components/ItemListFunctional.tsx` has the same behaviour as task 1, written with `useState` instead of a class.

Props and state interfaces for both tasks are in `types.ts`, and the mock data is in `data/items.ts`.

## Task 3 - React portal

- `components/ModalForm.tsx` keeps the input and textarea values in state and passes them to the modal.
- The "Open modal" button is disabled while both fields are empty.
- `components/Modal.tsx` is a layout component rendered with `createPortal` into `document.body`. It renders its `children` and a "Close" button.
- While the modal is open the body gets `overflow: hidden`, and `overflow: auto` when it closes.
