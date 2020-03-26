import { Pool } from "pg";
import { getConfig } from "./config";
import * as Models from "./models";

export const pool = new Pool({
  user: getConfig().dbUser,
  host: getConfig().dbHost,
  database: getConfig().dbName,
  password: getConfig().dbPass,
  port: getConfig().dbPort
});

export const getHelper = async (id: Models.ModelId): Promise<Models.Helper> => {
  const {
    rows
  } = await pool.query(
    "SELECT * FROM helper JOIN human ON helper.human_id = human.id JOIN human_location_map ON human_location_map.human_id = helper.human_id WHERE helper.id = $1",
    [id]
  );
  const result = rows[0];
  return {
    id: result.id,
    verified: result.verified,
    human: {
      id: result.human.id,
      name: result.human.id,
      email: result.human.email
    },
    zipCode: result.zip_code
  };
};

export const getHelpSeeker = async (
  id: Models.ModelId
): Promise<Models.HelpSeeker> => {
  const {
    rows
  } = await pool.query(
    "SELECT * FROM help_seeker JOIN human ON helper.human_id = human.id JOIN human_location_map ON human_location_map.human_id = helper.human_id WHERE help_seeker.id = $1",
    [id]
  );
  const result = rows[0];
  return {
    id: result.id,
    human: {
      id: result.human.id,
      name: result.human.name,
      email: result.human.email
    },
    zipCode: result.zipCode
  };
};

export const getHelpSeekersInZipCode = async (
  zipCode: Models.ZipCode
): Promise<Array<Models.HelpSeeker>> => {
  const {
    rows
  } = await pool.query(
    "SELECT * FROM help_seeker join human_location_map ON help_seeker.human_id = human_location_map.human_id WHERE human_location_map.zip_code = $1 LIMIT 100",
    [zipCode]
  );

  return rows.map(result => ({
    id: result.id,
    human: {
      id: result.human.id,
      name: result.human.name,
      email: result.human.email
    }
  }));
};
