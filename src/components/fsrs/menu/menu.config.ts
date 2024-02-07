interface MenuConfig {
  component: string
  sort: number
  filter?: boolean
}

type Configs = {
  [key: string]: MenuConfig
}

const addNote = {
  component: "addNote.tsx",
  sort: 1,
}

const searchNote = {
  component: "searchNote.tsx",
  sort: 2,
}

const Configs: Configs = {
  [`${addNote.component}`]: addNote,
  [`${searchNote.component}`]: searchNote,
}
export default Configs
