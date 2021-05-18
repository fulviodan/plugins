import { Button } from "@chakra-ui/button";

export const extensions = [".txt"];

export default function B({ state }) {
  return <Button onClick={(e) => (state.number *= 2)}>Ciao</Button>;
}
