async function getUser(userId) {
    return await fetch(`http://localhost:3002/api/user?id=${userId}`);
}

async function getProfile(profileId) {
    return await fetch(`http://localhost:3002/api/profile?id=${profileId}`);
}


async function main() {
    const responseUser = await getUser("xkSTVIdTsrgmCBeo");

    const user = await responseUser.json();

    console.log(user);

    const responseProfile = await getProfile(user.profileId);

    const profile = await responseProfile.json();

    console.log(profile);
}

main();