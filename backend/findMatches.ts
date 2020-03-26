import * as Models from "./models";
import { getHelpSeekersInZipCode } from "./Queries";

export const getMatches = async (
  helper: Models.Helper
): Promise<Array<Models.HelpSeeker>> => {
  /* TODO a few improvements:
  1. There's no sense of prioritization. We're just grabbing the top 100.
  2. We're only getting help seekers in the helper's zip code
  */
  const helpers = await getHelpSeekersInZipCode(helper.zipCode!);
  return helpers.slice(2);
};
