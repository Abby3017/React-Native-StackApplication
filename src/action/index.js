export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    };
};

//action is created
