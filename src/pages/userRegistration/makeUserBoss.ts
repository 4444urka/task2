import { getCompanyCountryByName, getCompanyIdByName, getUserIdByName, updateCompany } from "../../http/api";
import { TUserRegistrationInfo } from "../../types";

export async function makeUserBoss(data: TUserRegistrationInfo): Promise<void> {
    if (data.isBoss) {
        try {
            await updateCompany(await getCompanyIdByName(data.companyName), data.companyName, await getUserIdByName(data.name), await getCompanyCountryByName(data.companyName));

        }
        catch(error: any) {
            console.log(error.response);
        }

    }
    else {
        return;
    }

}