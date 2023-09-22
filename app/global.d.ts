import type { Database as DB } from "@/lib/database.types";

declare global {
    type Database = DB;
    type Profiles = DB["public"]["Tables"]["profiles"]["Row"];
}