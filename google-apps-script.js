/**
 * Google Apps Script - Lead Capture for Rankers' Paradise
 *
 * DEPLOYMENT INSTRUCTIONS:
 * 1. Create a new Google Sheet
 * 2. Add headers in row 1: Timestamp | Name | Phone | Source
 * 3. Go to Extensions > Apps Script
 * 4. Delete any existing code and paste this entire file
 * 5. Click Deploy > New deployment
 * 6. Select "Web app" as deployment type
 * 7. Set "Execute as" to your account
 * 8. Set "Who has access" to "Anyone"
 * 9. Click Deploy and authorize
 * 10. Copy the Web App URL and paste it in your config.js
 */

/**
 * Handles POST requests from the website form
 * @param {Object} e - The event object containing POST data
 * @returns {TextOutput} JSON response
 */
function doPost(e) {
  try {
    // Get the active spreadsheet and sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Parse the incoming JSON data
    var data = JSON.parse(e.postData.contents);

    // Append a new row with the form data
    sheet.appendRow([
      new Date(),                      // Timestamp
      data.name || '',                 // Name
      data.phone || '',                // Phone
      data.source || 'Website Popup'   // Source
    ]);

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'success',
        message: 'Lead captured successfully'
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Log the error for debugging
    console.error('Error in doPost:', error);

    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Handles GET requests (for testing the endpoint)
 * @param {Object} e - The event object
 * @returns {TextOutput} Plain text response
 */
function doGet(e) {
  return ContentService
    .createTextOutput('Rankers Paradise Lead Capture API is running. Use POST to submit leads.')
    .setMimeType(ContentService.MimeType.TEXT);
}

/**
 * Test function - Run this to verify the script works
 * Creates a test entry in the spreadsheet
 */
function testAppend() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.appendRow([
    new Date(),
    'Test User',
    '9876543210',
    'Test Entry'
  ]);
  Logger.log('Test row appended successfully!');
}

/**
 * Sets up the spreadsheet with headers (run once)
 */
function setupSheet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Check if headers already exist
  var firstRow = sheet.getRange(1, 1, 1, 4).getValues()[0];
  if (firstRow[0] !== 'Timestamp') {
    // Add headers
    sheet.getRange(1, 1, 1, 4).setValues([['Timestamp', 'Name', 'Phone', 'Source']]);

    // Format headers
    var headerRange = sheet.getRange(1, 1, 1, 4);
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#1e5f74');
    headerRange.setFontColor('#ffffff');

    // Set column widths
    sheet.setColumnWidth(1, 180); // Timestamp
    sheet.setColumnWidth(2, 200); // Name
    sheet.setColumnWidth(3, 150); // Phone
    sheet.setColumnWidth(4, 150); // Source

    // Freeze header row
    sheet.setFrozenRows(1);

    Logger.log('Sheet setup complete!');
  } else {
    Logger.log('Headers already exist.');
  }
}
