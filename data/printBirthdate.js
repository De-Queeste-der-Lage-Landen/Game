export default `public static String alsTekst(String datum) {
	if (datum == null || datum.length() != 10) {
    	LOGGER.error("Datumveld is leeg of ongeldig formaat");
    	return "";
	}
	try {
    	// Probeer volledige datum te parsen
    	return LocalDate.parse(datum).format(DateTimeFormatter.ofPattern("d MMMM yyyy", Locale.forLanguageTag("nl")));
	} catch (DateTimeParseException geenDag) {
    	try {
        	return YearMonth.parse(datum.substring(0,7)).format(DateTimeFormatter.ofPattern("MMMM yyyy", Locale.forLanguageTag("nl")));
    	} catch (DateTimeParseException geenDagMaand) {
        	try {
            	return Year.parse(datum.substring(0,3)).format(DateTimeFormatter.ofPattern("yyyy", Locale.forLanguageTag("nl")));
        	} catch (DateTimeParseException geenIdee) {
            	LOGGER.info(String.format("Datum in ongeldig formaat: %s", datum));
            	return "";
        	}
    	}
	}
}

`;
