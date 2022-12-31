const OwnerWashRepository = require("../repositories/owner_wash.repository");
const { wash_list } = require("../models/wash_list.js");
const user = require("../models/user");

class OwnerWashService {
  ownerWashRepository = new OwnerWashRepository(wash_list);

  findOwnerWashById = async (wash_id) => {
    const findWashData = await this.ownerWashRepository.findOwnerWashById(
      wash_id
    );
    const findUserData = await this.ownerWashRepository.findUserWashById(
      wash_id
    );
    console.log({ findUserData });

    return {
      wash_id: findWashData.wash_id,
      status: findWashData.status,
      extra: findWashData.extra,
      image: findWashData.image,
      createdAt: findWashData.createdAt,
      updatedAt: findWashData.updatedAt,
      user_id: findWashData.user_id,
      nickname: findUserData.user.nickname,
      address: findUserData.user.address,
      phone_number: findUserData.user.phone_number,
    };
  };
}

module.exports = OwnerWashService;
