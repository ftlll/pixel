const STORAGE_KEY = 'FTL';

const saveDataToStorage = (storage, data) => {
    try {
      storage.setItem(STORAGE_KEY, JSON.stringify(data));
      return true;
    } catch (e) {
      return false; // There was an error
    }
}
  
export function initStorage(storage) {
    storage.setItem(
        STORAGE_KEY,
        JSON.stringify({
        stored: [],
        current: 0
        })
    );
}

export function getDataFromStorage(storage) {
  try {
    const data = storage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : false;
  } catch (e) {
    return false; // There was an error
  }
}

export function saveProjectToStorage(storage, projectData) {
    try {
      let dataStored = getDataFromStorage(storage);
      if (dataStored) {
        dataStored.stored.push(projectData);
        dataStored.current = dataStored.stored.length - 1;
      } else {
        dataStored = {
          stored: [projectData],
          current: 0
        };
      }
      storage.setItem(STORAGE_KEY, JSON.stringify(dataStored));
      return true;
    } catch (e) {
      return false;
    }
  }