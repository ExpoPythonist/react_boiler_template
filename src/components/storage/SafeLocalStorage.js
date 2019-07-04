class SafeLocalStorage {

    constructor() {
        this.storageKey = "ariana-v1.1";
        this.storageAvailable = this.isLocalStorageEnabled();
    }

    isLocalStorageEnabled() {
        if (typeof localStorage !== 'undefined') {
            try {
                localStorage.setItem('feature_test', 'yes');
                if (localStorage.getItem('feature_test') === 'yes') {
                    localStorage.removeItem('feature_test');
                    // localStorage is enabled
                    return true;
                } else {
                    // localStorage is disabled
                    return false;
                }
            } catch (e) {
                // localStorage is disabled
                return false;
            }
        } else {
            // localStorage is not available
            return false;
        }
    }

    getClientId() {
        if (this.storageAvailable) {
            let clientId = "ariana_client_id";
            var cId = localStorage.getItem(clientId);
            if (cId == null) {
                var randomId = Math.random().toString(36).substring(2);
                try {
                    localStorage.setItem(clientId, randomId);
                    return localStorage.getItem(clientId);
                } catch (e) {
                    return null;
                }
            } else {
                return localStorage.getItem(clientId);
            }
        }
        return null;
    }
}

export default SafeLocalStorage;