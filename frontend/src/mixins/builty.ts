import { events } from "@src/config/routes";
import { useAppDispatch, useAppSelector } from "@src/store/hooks"
import { selectBuiltyInfo, setBuiltyData, setBuiltyInfo, setShowAddBuiltyModal, updateBuiltyField } from "@src/store/slices/builtySlice";
import axios from "axios";

type BuiltyFieldPath =
    | "builtyNo"
    | "date"
    | "vehicleNo"
    | "route.from"
    | "route.to"
    | "route.via"
    | "consignor.name"
    | "consignor.mobile"
    | "consignee.name"
    | "consignee.mobile"
    | "goods.noOfPackages"
    | "goods.category"
    | "goods.weight"
    | "goods.rate"
    | "charges.freight"
    | "charges.otherCharges"
    | "charges.advance"
    | "driver.name"
    | "driver.licenseNo"
    | "driver.mobile"
    | "owner.name"
    | "owner.mobile"
    | "owner.address";

export const useBuiltyHandler = () => {
    const dispatch = useAppDispatch();

    const builtyInfo = useAppSelector(selectBuiltyInfo);

    const openAddBuiltyModal = () => {
        dispatch(setShowAddBuiltyModal(true));
    }

    const closeAddBuiltyModal = () => {
        dispatch(setShowAddBuiltyModal(false));
    }

    const changeFormData = (
        path: BuiltyFieldPath,
        value: string | number
    ) => {
        dispatch(updateBuiltyField({ path, value }));
    };

    const calculateBalance = () => {
        const freight = Number(builtyInfo.charges.freight) || 0;
        const otherCharges = Number(builtyInfo.charges.otherCharges) || 0;
        const advance = Number(builtyInfo.charges.advance) || 0;

        return freight + otherCharges - advance;
    };

    const createBuilty = async (): Promise<void> => {
        try {
            //loading state
            const { method, url } = events.PERFORM_ADD_BUILTY;

            const response = await axios({
                method,
                url,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    builty_no: builtyInfo.builtyNo,
                    date: builtyInfo.date,
                    vehicle_no: builtyInfo.vehicleNo,
                    route: {
                        from: builtyInfo.route.from,
                        to: builtyInfo.route.to,
                        via: builtyInfo.route.via,
                    },
                    consignor: {
                        name: builtyInfo.consignor.name,
                        address: builtyInfo.route.from,
                        phone: builtyInfo.consignor.mobile
                    },
                    consignee: {
                        name: builtyInfo.consignee.name,
                        address: builtyInfo.route.to,
                        phone: builtyInfo.consignee.mobile
                    },
                    goods: {
                        no_of_packages: builtyInfo.goods.noOfPackages,
                        category: builtyInfo.goods.category,
                        weight: builtyInfo.goods.weight,
                        rate: builtyInfo.goods.rate,
                    },
                    charges: {
                        freight: builtyInfo.charges.freight,
                        other_charges: builtyInfo.charges.otherCharges,
                        advance: builtyInfo.charges.advance,
                    },
                    driver: {
                        name: builtyInfo.driver.name,
                        phone: builtyInfo.driver.mobile,
                        license_no: builtyInfo.driver.licenseNo
                    },
                    owner: {
                        name: builtyInfo.owner.name,
                        phone: builtyInfo.owner.mobile,
                        address: builtyInfo.owner.address
                    },
                }
            })
            console.log('response', response);
            closeAddBuiltyModal();
            //stop loading state
        } catch (error) {
            console.log('error', error);
        }
    }

    const getBuiltyList = async() : Promise<void> => {
        try {
            //loading state
            const { method, url } = events.PERFORM_GET_BUILTY_LIST;
            const response = await axios({
                method,
                url,
                headers: {
                    'Content-Type': 'application/json',
                }
            })
            console.log('Builty List response', response);
            dispatch(setBuiltyData(response.data.data));
            //stop loading state
        }catch(error) {
            console.log('error', error);
        }
    }

    return {
        openAddBuiltyModal,
        closeAddBuiltyModal,
        changeFormData,
        calculateBalance,
        createBuilty,
        getBuiltyList
    }
}