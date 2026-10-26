# Module 3: React hooks

All tasks are listed in the `reactHooks` array in `AppModule3.tsx` and rendered one after another.

## Built-in hooks

### useEffect

- **Timer** (`components/TimerComponent.tsx`): `Start` / `Stop` buttons control a `setInterval` created inside `useEffect`. The interval is cleared when the timer stops or the component unmounts. Elapsed time is rendered in a `p`.
- **Fetch** (`components/FetchComponent.tsx`): loads users from `jsonplaceholder.typicode.com` and renders them in a list. Handles loading and error states, and aborts the request on unmount.
- **Resize** (`components/ResizeComponent.tsx`): adds a `resize` listener on mount, removes it on unmount, and renders the window size in a `p`.

### useContext

- **Theme** (`components/theme/`): `ThemeContext` + `useTheme` hook, `ThemeProvider`, `ThemeToggler` and `ThemeComponent`.
  - Light: `#141414` text on `#ECECEC` background.
  - Dark: `#ECECEC` text on `#141414` background.
  - The current theme is rendered in an `h3`.

### useReducer

- **TodoList** (`components/todo/`): `todoReducer` handles `ADD_TODO`, `TOGGLE_TODO` and `REMOVE_TODO`. Todos are rendered in a `ul`, and the input is cleared after adding.

## Custom hooks (`hooks/`)

- **useOutsideClick** + `DropDownComponent`: the dropdown element is taken with `useRef`. A `mousedown` listener is added on mount and removed on unmount, and the dropdown closes when the click target is outside of it.
- **useKeyBoardPress** + `AccordionComponent`: a `keydown` listener is added on mount and removed on unmount. `Enter` / `+` open the accordion, `Escape` / `-` close it. Keys typed inside inputs and textareas are ignored.
- **useScrollPosition** + `ScrollComponent`: a `scroll` listener is added on mount and removed on unmount. The state only updates when the position actually changes, and the vertical and horizontal values are rendered in a `p`.
