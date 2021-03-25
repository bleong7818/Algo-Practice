var productExceptSelf = function (nums) {
    let products = Array(nums.length).fill(1);
    let productThusFar = 1;

    for (let i = 0; i < nums.length; i++) {
        products[i] *= productThusFar;
        productThusFar *= nums[i];
    }

    productThusFar = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        products[i] *= productThusFar;
        productThusFar *= nums[i];
    }

    return products;
};