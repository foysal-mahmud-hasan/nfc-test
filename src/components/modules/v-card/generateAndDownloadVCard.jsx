import VCard from "vcard-creator";
import download from "downloadjs";
import { contactData } from "./ContactData";
import { readLocalStorageValue } from "@mantine/hooks";


export default function generateAndDownloadVCard() {

    const values = readLocalStorageValue({ key: 'signup-form-data' });
    console.log(values.name);
    console.log(values.email);
    console.log(values.phone);
    console.log(values.company_name);
    console.log(values.designation);
    console.log(values.address);
    const downloadFile = () => {
        const myVCard = new VCard();
        myVCard
            .addName(values.name)
            .addEmail(values.email)
            .addPhoneNumber(values.phone)
            .addCompany(values.company_name)
            .addJobtitle(values.designation)
            .addAddress(values.address)
        download(myVCard.toString(), "dlText.vcf");
    };
    downloadFile();
}
