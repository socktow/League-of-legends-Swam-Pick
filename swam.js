await fetch('/lol-settings/v2/account/LCUPreferences/STRAWBERRY_LOCAL_SETTINGS_V1', {
    method: 'PATCH',
    body: JSON.stringify({
        data: {
            championId: (id champion)
        },
        schemaVersion: 0
    }),
    headers: {
        'Content-Type': 'application/json'
    }
});
