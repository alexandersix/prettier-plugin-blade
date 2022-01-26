import path from "path";
import { formatFile } from "../utils";

test("basic", () => {
  const formatted = formatFile(path.join(__dirname, "./echo.blade.php"));
  expect(formatted).toMatchSnapshot();
});
