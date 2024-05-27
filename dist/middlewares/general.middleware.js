"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleIdValidation = void 0;
const constants_1 = require("@/constants/constants");
const handleIdValidation = (req, res, next) => {
    const { id } = req.params;
    if (!id || !Number(id)) {
        return res
            .status(constants_1.STATUS_CODE_INVALID)
            .send({ message: constants_1.INVALID_ID_MESSAGE });
    }
    next();
};
exports.handleIdValidation = handleIdValidation;
//# sourceMappingURL=general.middleware.js.map