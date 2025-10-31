import { createContext, useState } from "react";

export const FontContext = createContext({
  state: { fontSize: "" }, 
  actions: { setFontSize: () => {} }
})

export const FontSizeProvider = ({children}) => {
  const [fontSize, setFontSize] = useState("40px")
  const value = {
    state: { fontSize: fontSize },
    actions: { setFontSize: setFontSize }
  }

  return (
    <FontContext.Provider value={value}>
      {children}
    </FontContext.Provider>
  )
}
  