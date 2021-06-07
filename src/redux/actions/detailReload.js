export const type = 'DETAIL_RELOAD';

const detailReload = (isReloading) => ({
    type,
    payload: isReloading,
});

export default detailReload;
