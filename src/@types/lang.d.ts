interface Lang extends BaseModel {
    local: string;
    code: string;
    en: string;
    vn: string;
    activeMenu: boolean;
}

interface ResGetLangIDApi implements ApiResponse<Lang> { }

interface ResGetLangID implements ResGetApiResponse<Lang> { }

interface ResGetAllLangApi implements ApiResponses<Lang> { }

interface ResGetAllLang implements ResGetApiResponses<Lang> { }