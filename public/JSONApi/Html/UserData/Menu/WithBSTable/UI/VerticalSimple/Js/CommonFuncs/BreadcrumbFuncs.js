let jFShowFolderInBreadcrumb = ({ inFolderName, inFileNameWithExtension, inItemName, inScreenName }) => {
    let jVarLocalBreadcrumbFolderNameId = document.getElementById("BreadcrumbFolderNameId");
    jVarLocalBreadcrumbFolderNameId.href = `../../Files.html?FolderName=${inFolderName}`;
    jVarLocalBreadcrumbFolderNameId.innerHTML = inFolderName;

    let jVarLocalBreadcrumbFileNameId = document.getElementById("BreadcrumbFileNameId");
    jVarLocalBreadcrumbFileNameId.href = `../../Items.html?FolderName=${inFolderName}&FileName=${inFileNameWithExtension}.json`;
    jVarLocalBreadcrumbFileNameId.innerHTML = inFileNameWithExtension;

    let jVarLocalBreadcrumbItemNameId = document.getElementById("BreadcrumbItemNameId");
    jVarLocalBreadcrumbItemNameId.href = `../../Screens.html?FolderName=${inFolderName}&FileName=${inFileNameWithExtension}&ItemName=${inItemName}`;
    jVarLocalBreadcrumbItemNameId.innerHTML = inItemName;

    let jVarLocalBreadcrumbScreenNameId = document.getElementById("BreadcrumbScreenNameId");
    jVarLocalBreadcrumbScreenNameId.href = `../../UIEntry/Options.html?FolderName=${inFolderName}&FileName=${inFileNameWithExtension}&ItemName=${inItemName}&ScreenName=${inScreenName}`;
    jVarLocalBreadcrumbScreenNameId.innerHTML = inScreenName;
};

export { jFShowFolderInBreadcrumb }