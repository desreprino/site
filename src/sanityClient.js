import sanityClient from "@sanity/client";

export default sanityClient({
	projectId: "wwzrxktr",
	dataset: "production",
	useCdn: true,
});
