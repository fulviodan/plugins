import "./App.css";
import React, { useEffect } from "react";
import { useCompositeState } from "./hooks/state";
import { Box } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/layout";

const plugins = ["A", "Altroplugin", "Reset"];

function App() {
  const state = useCompositeState({ modules: [] });
  const pluginState = useCompositeState({ number: 0 });

  useEffect(() => {
    Promise.all(
      plugins.map(async (el) => {
        const m = await import(`./plugins/${el}`);
        console.log("Ext", m.extensions);
        return {
          component: m.default,
          extensions: m.extensions || [],
          name: el,
        };
      })
    ).then((result) => {
      console.log(result);

      state.modules = result;
    });
  }, []);
  return (
    <div className="App">
      <Box>
        <Box>{pluginState.number}</Box>
        {state.modules.map((el, i) => (
          <Stack direction="column" key={i}>
            <Box>{el.name}</Box>
            <Box>
              Estensioni
              {JSON.stringify(el.extensions)}
            </Box>
            <Box>
              {React.createElement(el.component, { state: pluginState })}
            </Box>
          </Stack>
        ))}
      </Box>
    </div>
  );
}

export default App;
