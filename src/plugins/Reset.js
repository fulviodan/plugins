import { Button } from "@chakra-ui/button";

export default function B({ state }) {
  return <Button onClick={(e) => (state.number = 0)}>Reset</Button>;
}
