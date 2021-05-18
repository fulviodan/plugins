import { Button } from "@chakra-ui/button";

export default function ({ state }) {
  return <Button onClick={(e) => state.number++}>Altro bottone</Button>;
}
