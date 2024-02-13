import { Heading, HeadingLevel } from "baseui/heading";
import { ParagraphMedium } from "baseui/typography";

import { FancyInput } from "./candidate/FancyInput";

function IndexPage() {
  return (
    <>
      <HeadingLevel>
        <Heading>Welcome! 🙌</Heading>
          <FancyInput placeholder={"Please make me fancy 🤩"} />
          <ParagraphMedium>
            An emoji picker that's triggered where the user types a colon (:)
            character followed by 2 or more alphnumeric characters
          </ParagraphMedium>
      </HeadingLevel>
    </>
  );
}

export { IndexPage };
