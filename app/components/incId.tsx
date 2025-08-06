import { prisma } from '~/modules/libs/prisma';



export async function IncId({ type }) {
  // const dealerId = await IncId({ type: "Client" });
  // Client, PAC, PAC Inv, Sales, WO, Unit, FinanceTradeUnit, ServiceUnit, Service, ServicePackages, Dealer
  let oldId;
  let newId;
  switch (type) {
    case "MYModel":
      const MYModelUnit = await prisma.currentMYModels.findFirst({
        orderBy: { createdAt: "desc" },
        select: { dealerId: true },
      });
      oldId = MYModelUnit?.dealerId || "MYModel_0";
      newId = incrementId(oldId, "MYModel");
      break;
    case "Client":
      const lastClient = await prisma.clientfile.findFirst({
        orderBy: { createdAt: "desc" }, // Get the last created item
        select: { dealerId: true },
      });
      oldId = lastClient?.dealerId || "CLIENT_0"; // Default to "CLIENT-0" if no items exist
      newId = incrementId(oldId, "CLIENT");
      break;
    case "PAC":
      const lastPAC = await prisma.accOrder.findFirst({
        orderBy: { createdAt: "desc" },
        select: { dealerId: true },
      });
      oldId = lastPAC?.dealerId || "PAC_0";
      newId = incrementId(oldId, "PAC");
      break;
    case "PAC Inv":
      const lastAcc = await prisma.accessories.findFirst({
        orderBy: { createdAt: "desc" },
        select: { dealerId: true },
      });
      oldId = lastAcc?.dealerId || "INV_0";
      newId = incrementId(oldId, "INV");
      break;
    case "Sales":
      const lastSales = await prisma.finance.findFirst({
        orderBy: { createdAt: "desc" },
        select: { dealerId: true },
      });
      oldId = lastSales?.dealerId || "SALES_0";
      newId = incrementId(oldId, "SALES");
      break;
    case "Ticket":
      const lastTicket = await prisma.clientTickets.findFirst({
        orderBy: { createdAt: "desc" },
        select: { dealerId: true },
      });
      oldId = lastTicket?.dealerId || "TICKET_0";
      newId = incrementId(oldId, "TICKET");
      break;
    case "WO":
      const lastWO = await prisma.workOrder.findFirst({
        orderBy: { createdAt: "desc" },
        select: { dealerId: true },
      });
      oldId = lastWO?.dealerId || "WO_0";
      newId = incrementId(oldId, "WO");
      break;
    case "Unit":
      const lastUnit = await prisma.inventoryMotorcycle.findFirst({
        orderBy: { createdAt: "desc" },
        select: { dealerId: true },
      });
      oldId = lastUnit?.dealerId || "UNIT_0";
      newId = incrementId(oldId, "UNIT");
      break;
    case "FinanceTradeUnit":
      const lastFinanceUnit = await prisma.financeTradeUnit.findFirst({
        orderBy: { createdAt: "desc" },
        select: { dealerId: true },
      });
      oldId = lastFinanceUnit?.dealerId || "TRADE_0";
      newId = incrementId(oldId, "TRADE");
      break;
    case "ServiceUnit":
      const serviceUnit = await prisma.serviceUnit.findFirst({
        orderBy: { createdAt: "desc" },
        select: { dealerId: true },
      });
      oldId = serviceUnit?.dealerId || "SUNIT_0";
      newId = incrementId(oldId, "SUNIT");
      break;
    case "Service":
      const lastService = await prisma.services.findFirst({
        orderBy: { createdAt: "desc" },
        select: { dealerId: true },
      });
      oldId = lastService?.dealerId || "SERVICE_0";
      newId = incrementId(oldId, "SERVICE");
      break;
    case "ServicePackages":
      const lastPackage = await prisma.servicePackages.findFirst({
        orderBy: { createdAt: "desc" },
        select: { dealerId: true },
      });
      oldId = lastPackage?.dealerId || "PKG_0";
      newId = incrementId(oldId, "PKG");
      break;
    case "Dealer":
      const lastDealer = await prisma.dealer.findFirst({
        orderBy: { createdAt: "desc" },
        select: { dealerId: true },
      });
      oldId = lastDealer?.dealerId || "DEALER_0";
      newId = incrementId(oldId, "DEALER");
      break;
    case "Receipt":
      const lastPayment = await prisma.payment.findFirst({
        orderBy: { createdAt: "desc" },
        select: { dealerId: true },
      });
      oldId = lastPayment?.dealerId || "RECEIPT_0";
      newId = incrementId(oldId, "RECEIPT");
      break;
    case "User":
      const lastUser = await prisma.user.findFirst({
        orderBy: { createdAt: "desc" },
        select: { dealerId: true },
      });
      oldId = lastUser?.dealerId || "USER_0";
      newId = incrementId(oldId, "USER");
      break;
    default:
      throw new Error("Invalid type");
  }
  return newId;
}
function incrementId(oldId, prefix) {
  // Extract the numeric part using a regular expression
  const numericMatch = oldId.match(/\d+/);

  // If no numeric part is found, default to 0
  const numericPart = numericMatch ? parseInt(numericMatch[0], 10) : 0;

  // Increment the numeric part
  const newNumericPart = numericPart + 1;

  // Return the new ID in the format "PREFIX_{incrementedNumber}"
  return `${prefix}_${newNumericPart}`;
}