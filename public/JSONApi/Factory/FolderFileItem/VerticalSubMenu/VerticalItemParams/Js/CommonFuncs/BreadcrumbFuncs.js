let jFShowFolderInBreadcrumb = ({ inFolderName, inFileNameWithExtension, inItemName, inScreenName }) => {
    let jVarLocalBreadcrumbFolderNameId = document.getElementById("BreadcrumbFolderNameId");
    jVarLocalBreadcrumbFolderNameId.href = `../Menu/AsCards/Files.html?FolderName=${inFolderName}`;
    jVarLocalBreadcrumbFolderNameId.innerHTML = inFolderName;

    let jVarLocalBreadcrumbFileNameId = document.getElementById("BreadcrumbFileNameId");
    jVarLocalBreadcrumbFileNameId.href = `../Menu/AsCards/Items.html?FolderName=${inFolderName}&FileName=${inFileNameWithExtension}`;
    jVarLocalBreadcrumbFileNameId.innerHTML = inFileNameWithExtension;

    let jVarLocalBreadcrumbItemNameId = document.getElementById("BreadcrumbItemNameId");
    jVarLocalBreadcrumbItemNameId.href = `../Menu/AsCards/Screens.html?FolderName=${inFolderName}&FileName=${inFileNameWithExtension}&ItemName=${inItemName}`;
    jVarLocalBreadcrumbItemNameId.innerHTML = inItemName;

    let jVarLocalBreadcrumbScreenNameId = document.getElementById("BreadcrumbScreenNameId");
    jVarLocalBreadcrumbScreenNameId.innerHTML = inScreenName;
};

export { jFShowFolderInBreadcrumb }