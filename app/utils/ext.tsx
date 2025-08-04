// import { PrismaClient } from '@prisma/client';
// const prisma = new PrismaClient();
import { prisma } from '~/libs';
import { AccessoriesObj, AccOrderObj, WorkOrderObj, ClientfileObj, dealerFull, userSelection, InventoryMotorcycleObj, clientTasksCols, CurrentMYModelsObj, ClientTicketsObj, FinanceObj } from './loader.server';
import { IncId } from '~/components';

// import eP from '~/utils/ext.server'
// const d = JSON.parse({  financeId,    clientAptsData,    formData3})
// const createFollowup = await eP.clientApts.d(d)

const eP = prisma.$extends({
  model: {
    accessories: {
      async all(dealerId: string) { return await prisma.accessories.findUnique({ where: { dealerId }, include: AccessoriesObj }) },
      async basic(dealerId: string) {
        return await prisma.accessories.findUnique({
          where: { dealerId },
          select: {
            id: true,
            name: true,
            price: true,
            quantity: true,
            description: true,
            sku: true,
            brand: true,
            manufacturer: true
          }
        });
      },
      async wInventoryInfo(dealerId: string) {
        return await prisma.accessories.findUnique({
          where: { dealerId },
          select: {
            id: true,
            name: true,
            price: true,
            quantity: true,
            minQuantity: true,
            onOrder: true,
            backorderable: true,
            discontinued: true,
            location: true,
            bin: true,
            AccessoriesDistributor: true
          }
        });
      },
      async wMarketingInfo(dealerId: string) {
        return await prisma.accessories.findUnique({
          where: { dealerId },
          select: {
            id: true,
            name: true,
            shortDesc: true,
            description: true,
            htmlDescription: true,
            price: true,
            productUrl: true,
            videoUrl: true,
            featured: true,
            searchable: true,
            GalleryImage: true,
            AccessoriesTags: true,
            AccessoriesCategory: true,
            AccessoriesSubCategory: true
          }
        });
      }
    },
    accOrder: {
      // find all 
      async all(dept: string) { return await prisma.accOrder.findMany({ where: { dept }, include: AccOrderObj }) },
      // find all skip top
      async allST(dept, skip, top) { return await prisma.accOrder.findMany({ where: { dept }, include: AccOrderObj, skip: skip, take: top }) },
      // delete
      async d(d) { return await prisma.accOrder.delete({ where: { id: d.id } }) },
      async basic(dealerId: string) {
        return await prisma.accOrder.findUnique({
          where: { dealerId },
          select: {
            id: true,
            dealerId: true,
            createdAt: true,
            sentToPac: true,
            fulfilled: true,
            sentDate: true,
            total: true,
            discount: true,
            discPer: true,
            paid: true,
            paidDate: true,
            status: true,
            note: true
          }
        });
      },
      async wClient(dealerId: string) {
        return await prisma.accOrder.findUnique({
          where: { dealerId },
          select: {
            id: true,
            dealerId: true,
            createdAt: true,
            status: true,
            total: true,
            paid: true,
            clientfileId: true,
            Clientfile: {
              select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true,
                phone: true
              }
            }
          }
        });
      },
      async wItems(dealerId: string) {
        return await prisma.accOrder.findUnique({
          where: { dealerId },
          select: {
            id: true,
            dealerId: true,
            status: true,
            total: true,
            AccessoriesOnOrders: {
              select: {
                id: true,
                quantity: true,
                status: true,
                soldPrice: true,
                accessoryId: true,
                accessories: {
                  select: {
                    id: true,
                    name: true,
                    shortDesc: true,
                    sku: true,
                    partNumber: true,
                    GalleryImage: {
                      where: { isPrimary: true },
                      take: 1,
                      select: {
                        url: true,
                        alt: true
                      }
                    }
                  }
                }
              }
            }
          }
        });
      },
      async wPayments(dealerId: string) {
        return await prisma.accOrder.findUnique({
          where: { dealerId },
          select: {
            id: true,
            dealerId: true,
            status: true,
            total: true,
            paid: true,
            paidDate: true,
            Payment: {
              select: {
                id: true,
                amountPaid: true,
                paymentType: true,
                cardType: true,
                receiptId: true,
                createdAt: true
              }
            }
          }
        });
      },
      async fbClient(clientId: string) {
        return await prisma.accOrder.findMany({
          where: { clientfileId: clientId },
          select: {
            id: true,
            dealerId: true,
            createdAt: true,
            status: true,
            total: true,
            paid: true,
            AccessoriesOnOrders: {
              select: {
                quantity: true,
                accessories: {
                  select: {
                    name: true
                  }
                }
              }
            }
          },
          orderBy: { createdAt: 'desc' }
        });
      },
      async fbDateRange(startDate: Date, endDate: Date) {
        return await prisma.accOrder.findMany({
          where: {
            createdAt: {
              gte: startDate,
              lte: endDate
            }
          },
          select: {
            id: true,
            dealerId: true,
            createdAt: true,
            status: true,
            total: true,
            paid: true,
            clientfileId: true,
            Clientfile: {
              select: {
                firstName: true,
                lastName: true
              }
            }
          },
          orderBy: { createdAt: 'desc' }
        });
      },
      async fbStatus(status: string) {
        return await prisma.accOrder.findMany({
          where: { status },
          select: {
            id: true,
            dealerId: true,
            createdAt: true,
            total: true,
            clientfileId: true,
            Clientfile: {
              select: {
                firstName: true,
                lastName: true
              }
            }
          }
        });
      }
    },
    clientfile: {
      // find all
      async cf(id) { return await prisma.clientfile.findUnique({ where: { id: id }, include: ClientfileObj }) },
      async cfEmail(email) { return await prisma.clientfile.findUnique({ where: { id: email } }) },
      async all() { return await prisma.clientfile.findMany({ include: ClientfileObj }) },
      // find one
      async one(email) { return await prisma.clientfile.findUnique({ where: { email } }) },
      // find by dealerId
      async dId(dealerId) { return await prisma.clientfile.findUnique({ where: { dealerId } }) },
      // create
      async c(d) {
        return await prisma.clientfile.create({
          data: {
            dealerId: await IncId({ type: "Client" }),
            userEmail: d.user.email,
            firstName: d.d?.firstName,
            lastName: d.d?.lastName,
            name: d.d?.firstName + " " + d.d?.lastName,
            email: d.d?.email,
            phone: d.d?.phone || null,
          }
        })
      },
      // delete
      async d(d) { return await prisma.clientfile.delete({ where: { id: d.id } }) },
      async cIdUp(d) {
        const e = await prisma.clientfile.findUnique({ where: { id: d?.clientfileId } });
        if (!e) { throw new Error("Clientfile not found"); }
        return await prisma.clientfile.update({
          where: { id: d?.clientfileId },
          data: {
            firstName: d?.firstName ?? e?.firstName,
            lastName: d?.lastName ?? e?.lastName,
            name: d?.firstName + ' ' + d?.lastName ?? e?.name,
            email: d?.email ?? e?.email,
            phone: d?.phone ?? e?.phone,
            address: d?.address ?? e?.address,
            city: d?.city ?? e?.city,
            postal: d?.postal ?? e?.postal,
            province: d?.province ?? e?.province,
            dl: d?.dl ?? e?.dl,
            typeOfContact: d?.typeOfContact ?? e?.typeOfContact,
            timeToContact: d?.timeToContact ?? e?.timeToContact,
            conversationId: d?.conversationId ?? e?.conversationId,
            billingAddress: d?.billingAddress ?? e?.billingAddress,
            dob: d?.dob ?? e?.dob,
            financeId: d?.financeId ?? e?.financeId,
          }
        })
      },
      async wActiveOrders(dealerId: string) {
        return await prisma.clientfile.findUnique({
          where: { dealerId },
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
            AccOrder: {
              where: {
                status: {
                  in: ['Pending', 'Processing', 'On Backorder']
                }
              },
              select: {
                id: true,
                dealerId: true,
                createdAt: true,
                status: true,
                total: true,
                AccessoriesOnOrders: {
                  select: {
                    quantity: true,
                    accessories: {
                      select: {
                        name: true
                      }
                    }
                  }
                }
              }
            }
          }
        });
      },
      async wOrderHistory(dealerId: string) {
        return await prisma.clientfile.findUnique({
          where: { dealerId },
          select: {
            id: true,
            firstName: true,
            lastName: true,
            AccOrder: {
              orderBy: { createdAt: 'desc' },
              select: {
                id: true,
                dealerId: true,
                createdAt: true,
                status: true,
                total: true,
                paid: true
              }
            }
          }
        });
      },
      async findWithBasicInfo(id: string) {
        return await prisma.clientfile.findUnique({
          where: { id },
          select: {
            id: true,
            createdAt: true,
            updatedAt: true,
            firstName: true,
            lastName: true,
            name: true,
            email: true,
            phone: true,
            address: true,
            city: true,
            postal: true,
            province: true,
            dl: true,
            dob: true
          }
        });
      },
      async findWithFinanceHistory(id: string) {
        return await prisma.clientfile.findUnique({
          where: { id },
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
            Finance: {
              orderBy: { createdAt: 'desc' },
              select: {
                id: true,
                createdAt: true,
                status: true,
                customerState: true,
                year: true,
                brand: true,
                model: true,
                color: true,
                stockNum: true,
                financeManagerName: true
              }
            }
          }
        });
      },
      async findWithOrders(id: string) {
        return await prisma.clientfile.findUnique({
          where: { id },
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
            AccOrder: {
              orderBy: { createdAt: 'desc' },
              select: {
                id: true,
                createdAt: true,
                status: true,
                total: true,
                paid: true,
                paidDate: true
              }
            }
          }
        });
      },
      async findWithWorkOrders(id: string) {
        return await prisma.clientfile.findUnique({
          where: { id },
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
            WorkOrder: {
              orderBy: { createdAt: 'desc' },
              select: {
                id: true,
                createdAt: true,
                status: true,
                serviceUnit: true,
                estimatedCost: true,
                estimatedCompDate: true
              }
            }
          }
        });
      },
      async findComplete(id: string) {
        return await prisma.clientfile.findUnique({
          where: { id },
          include: ClientfileObj
        });
      }
    },
    tickets: {

      // find all
      async all() { return await prisma.clientTickets.findMany({ include: ClientTicketsObj }) },
      async allDept(dept: string) { return await prisma.clientTickets.findMany({ where: { dept }, include: clientTasksCols }) },
      // find all skip top
      async allST(dept, skip, top) { return await prisma.clientTickets.findMany({ where: { dept }, include: clientTasksCols, skip: skip, take: top }) },
      // find one by dealerId
      async one(dealerId) { return await prisma.clientTickets.findUnique({ where: { dealerId }, include: clientTasksCols }) },
      async d(d) { return await prisma.clientTickets.delete({ where: { id: d.id } }) },
    },
    customerSync: {
      async uFi(user, f) {
        return await prisma.customerSync.update({
          where: { userEmail: user.email },
          data: {
            clientfileId: f?.Clientfile?.id,
            financeId: f?.id,
            dealerId: f?.dealerId
          }
        })
      },
      async sales(d) {
        return await prisma.customerSync.update({
          where: { userEmail: d?.email },
          data: {
            clientfileId: d?.clientfileId,
            financeId: d?.financeId,
            dealerId: d?.dealerId
          }
        })
      },
      async one(email) { return await prisma.customerSync.findUnique({ where: { userEmail: email } }) },
    },
    currentMYModels: {
      async one(d) { return await prisma.currentMYModels.findUnique({ where: { brand: d.brand, model: d.model }, include: CurrentMYModelsObj }) },
      async d(d) { return await prisma.currentMYModels.delete({ where: { id: d.id } }) },
      async find(d) {
        return await prisma.CurrentMYModels.findFirst({
          where: { brand: d.brand, year: d.year, model: d.model },
          include: {
            highlights: true,
            gallery: true,
            colors: {
              include: {
                colorCategories: {
                  include: {
                    ColorChoice: true,
                  }
                }
              }
            },
            packages: {
              include: {
                PackageOption: true
              }
            },
            options: true,
            specs: true,
            Tagline: true,
            DescTitle: true,
            Desc: true,
            Accessories: true,
            DealerBrandsCategories: true,
            Dealer: true,
          }
        })
      },
    },
    cart: {
      async one(email) { return await prisma.cart.upsert({ where: { email: email }, update: {}, create: { clientId: userId } }) },
    },
    dealer: {
      async one() { return await prisma.dealer.findUnique({ where: { id: 1 }, include: dealerFull }) },
      async cf() {
        return await prisma.dealer.findUnique({
          where: { id: 1 }, include: {
            DealerList: true,
            users: true,
            DealerLogo: true,
            DealerBrands: true,
          }
        })
      },
    },
    demoDay: {
      async demo(userEmail) { return await prisma.demoDay.findMany({ orderBy: { createdAt: "desc" }, where: { userEmail } }) },
      async d(d) { return await prisma.demoDay.delete({ where: { id: d.id } }) },
    },
    emailTemplatesForDropdown: {
      async all(userEmail) { return await prisma.emailTemplatesForDropdown.findMany({ where: { userEmail } }) },
      async d(d) { return await prisma.emailTemplatesForDropdown.delete({ where: { id: d.id } }) },
    },
    emailTemplates: {
      async all(userEmail) { return await prisma.emailTemplates.findMany({ where: { userEmail: userEmail || 'skylerzanth@outlook.com' } }) },
      async d(d) { return await prisma.emailTemplates.delete({ where: { id: d.id } }) },
    },
    finance: {
      async all() { return await prisma.finance.findMany() },
      async allSearch() {
        return await prisma.finance.findMany({
          select: {
            dealerId: true,
            email: true,
            firstName: true,
            lastName: true,
            phone: true,
            name: true,
            address: true,
            city: true,
            postal: true,
            province: true,
            dl: true,
            id: true,
            clientfileId: true,
            Clientfile: {
              select: {
                id: true,
              }
            }
          }
        })
      },
      async allUe(userEmail) { return await prisma.finance.findMany({ where: { userEmail }, include: FinanceObj }) },
      async allST(userEmail, skip, top) { return await prisma.finance.findMany({ where: { userEmail }, include: FinanceObj, skip: skip, take: top }); },
      async lead(userEmail) { return await prisma.finance.findMany({ where: { userEmail }, include: FinanceObj }) },
      async dId(dealerId) {
        return await prisma.finance.findUnique({
          where: { dealerId: dealerId },
          include: {
            InventoryMotorcycle: true,
            ClientApts: true,
            ClientTicketUpdates: true,
            FinanceDeptProducts: true,
            FinanceTradeUnit: true,
            Comm: true,
            AccOrder: {
              include: {
                AccessoriesOnOrders: {
                  include: {
                    AccessoriesClientTicketUpdates: true,
                  }
                },
                WorkOrderNotesClientTicketUpdates: true,
                PaymentClientTicketUpdates: true,
                WorkOrderClientTicketUpdates: true,
              }
            },
            WorkOrder: true,
            Payment: true,
            FinanceNote: true,
            FinManOptions: true,
            bmwMotoOptions: true,
            FinCanOptions: true,
            FinanceStorage: true,
            ReviewDealMgr: true,
            SelectedOptions: true,
            SavedDocumentsClient: true,
            ClientTickets: {
              include: {
                ClientTicketUpdates: true,
              }
            },
            GalleryImage: true,
            FinanceApp: true,
            ActiveAutomationRelation: true,
          }
        })
      },
      async id(id) { return await prisma.finance.findUnique({ where: { id: id }, include: FinanceObj }) },
      async firstE(email) { return await prisma.finance.findFirst({ where: { email }, include: FinanceObj }) },
      async cfList(email) { return await prisma.finance?.findMany({ where: { email: email, } }) },
      async cfFile(id) { return await prisma.finance?.findUnique({ where: { id: id, } }) },
      async c(d) {
        return await prisma.finance.create({
          data: {
            dealerId: await IncId({ type: "Sales" }),
            clientfileId: d.c.id,
            email: d.d.email,
            firstName: d.d.firstName,
            lastName: d.d.lastName,
            phone: d.d.phone,
            name: d.d.firstName + ' ' + d.d.lastName,
            year: String(d.MY),
            brand: d.d.brand,
            model: d.d.model,
            color: d.d.color,
            lastContact: new Date(),
            msrp: String(d.m.msrp),
            userEmail: d.user.email,
            userName: d.user.username,
            trim: d.d.trim,
            financeFee: parseFloat(d.dealer.userFinance),
            demoFee: parseFloat(d.dealer.userDemo),
            gasOnDelFee: parseFloat(d.dealer.userGasOnDel),
            airTaxFee: parseFloat(d.dealer.userAirTax),
            tireTaxFee: parseFloat(d.dealer.userTireTax),
            governFee: parseFloat(d.dealer.userGovern),
            markAdjFee: parseFloat(d.dealer.userMarketAdj),
            destChargeFee: parseFloat(d.dealer.destinationCharge),
            pdi: d.dealer.userPDI,
            commodity: d.dealer.userCommodity,
            admin: d.dealer.userAdmin,
            freight: d.dealer.userFreight,
            licensing: String(d.dealer.userLicensing),
            numberOfPayments: 60.0,
            address: d.c.address || null,
            city: d.c.city || null,
            postal: d.c.postal || null,
            province: d.c.province || null,
            dl: d.c.dl || null,
            typeOfContact: d.c.typeOfContact || null,
            timeToContact: d.c.timeToContact || null,
            dob: d.c.dob || null,
          },
        });
      },

      async fIdUp(d) {
        const e = await prisma.finance.findUnique({ where: { id: d?.financeId } });
        if (!e) { throw new Error("finance not found"); }
        return await prisma.finance.update({
          where: { id: d?.financeId },
          data: {
            email: d?.email ?? e?.email,
            firstName: d?.firstName ?? e?.firstName,
            lastName: d?.lastName ?? e?.lastName,
            phone: d?.phone ?? e?.phone,
            name: d?.name ?? e?.name,
            address: d?.address ?? e?.address,
            city: d?.city ?? e?.city,
            postal: d?.postal ?? e?.postal,
            province: d?.province ?? e?.province,
            dl: d?.dl ?? e?.dl,
            typeOfContact: d?.typeOfContact ?? e?.typeOfContact,
            timeToContact: d?.timeToContact ?? e?.timeToContact,
            dob: d?.dob ?? e?.dob,
            stockNum: d?.stockNum ?? e?.stockNum,
            year: d?.year ?? e?.year,
            brand: d?.brand ?? e?.brand,
            mileage: d?.mileage ?? e?.mileage,
            model: d?.model ?? e?.model,
            model1: d?.model1 ?? e?.model1,
            color: d?.color ?? e?.color,
            modelCode: d?.modelCode ?? e?.modelCode,
            msrp: d?.msrp ?? e?.msrp,
            trim: d?.trim ?? e?.trim,
            bikeStatus: d?.bikeStatus ?? e?.bikeStatus,
            vin: d?.vin ?? e?.vin,
            invId: d?.invId ?? e?.invId,
            motor: d?.motor ?? e?.motor,
            tag: d?.tag ?? e?.tag,
            //#: .d?//# ?? .e?//#,
            tradeValue: d?.tradeValue ?? e?.tradeValue,
            tradeDesc: d?.tradeDesc ?? e?.tradeDesc,
            tradeColor: d?.tradeColor ?? e?.tradeColor,
            tradeYear: d?.tradeYear ?? e?.tradeYear,
            tradeMake: d?.tradeMake ?? e?.tradeMake,
            tradeVin: d?.tradeVin ?? e?.tradeVin,
            tradeTrim: d?.tradeTrim ?? e?.tradeTrim,
            tradeMileage: d?.tradeMileage ?? e?.tradeMileage,
            tradeLocation: d?.tradeLocation ?? e?.tradeLocation,
            //#: .d?//# ?? .e?//#,
            financeFee: parseFloat(d?.financeFee) ?? parseFloat(e?.financeFee),
            demoFee: parseFloat(d?.demoFee) ?? parseFloat(e?.demoFee),
            gasOnDelFee: parseFloat(d?.gasOnDelFee) ?? parseFloat(e?.gasOnDelFee),
            airTaxFee: parseFloat(d?.airTaxFee) ?? parseFloat(e?.airTaxFee),
            tireTaxFee: parseFloat(d?.tireTaxFee) ?? parseFloat(e?.tireTaxFee),
            tireTaxAmount: parseFloat(d?.tireTaxAmount) ?? parseFloat(e?.tireTaxAmount),
            governFee: parseFloat(d?.governFee) ?? parseFloat(e?.governFee),
            markAdjFee: parseFloat(d?.markAdjFee) ?? parseFloat(e?.markAdjFee),
            destChargeFee: parseFloat(d?.destChargeFee) ?? parseFloat(e?.destChargeFee),
            paymentFreq: d?.paymentFreq ?? e?.paymentFreq,
            paymentStartDate: d?.paymentStartDate ?? e?.paymentStartDate,
            financeDeal: d?.financeDeal ?? e?.financeDeal,
            //#: .d?//# ?? .e?//#,
            optionsTotal: d?.optionsTotal ?? e?.optionsTotal,
            lienPayout: d?.lienPayout ?? e?.lienPayout,
            leadNote: d?.leadNote ?? e?.leadNote,
            sendToFinanceNow: d?.sendToFinanceNow ?? e?.sendToFinanceNow,
            dealNumber: d?.dealNumber ?? e?.dealNumber,
            desiredPayments: d?.desiredPayments ?? e?.desiredPayments,
            desiredPaymentsOther: d?.desiredPaymentsOther ?? e?.desiredPaymentsOther,
            warrMonths: d?.warrMonths ?? e?.warrMonths,
            warrKms: d?.warrKms ?? e?.warrKms,
            warrName: d?.warrName ?? e?.warrName,
            actualCost: d?.actualCost ?? e?.actualCost,
            grossProfit: d?.grossProfit ?? e?.grossProfit,
            tax: d?.tax ?? e?.tax,
            withTax: d?.withTax ?? e?.withTax,
            sub: d?.sub ?? e?.sub,
            contractTotal: d?.contractTotal ?? e?.contractTotal,
            contractTotalWithLicOmv: d?.contractTotalWithLicOmv ?? e?.contractTotalWithLicOmv,
            principal: d?.principal ?? e?.principal,
            totalInterestCost: d?.totalInterestCost ?? e?.totalInterestCost,
            monthly: d?.monthly ?? e?.monthly,
            biweekly: d?.biweekly ?? e?.biweekly,
            weekly: d?.weekly ?? e?.weekly,
            iRate: d?.iRate ?? e?.iRate,
            months: d?.months ?? e?.months,
            discount: d?.discount ?? e?.discount,
            total: d?.total ?? e?.total,
            deposit: d?.deposit ?? e?.deposit,
            totalWithOptions: d?.totalWithOptions ?? e?.totalWithOptions,
            discountPer: d?.discountPer ?? e?.discountPer,
            lien: d?.lien ?? e?.lien,
            deliveryCharge: d?.deliveryCharge ?? e?.deliveryCharge,
            labour: d?.labour ?? e?.labour,
            paintPrem: d?.paintPrem ?? e?.paintPrem,
            pdi: d?.pdi ?? e?.pdi,
            commodity: d?.commodity ?? e?.commodity,
            admin: d?.admin ?? e?.admin,
            freight: d?.freight ?? e?.freight,
            licensing: d?.licensing ?? e?.licensing,
            //
            accessories: parseFloat(d?.accessories) ?? parseFloat(e?.accessories),
            motorTotal: parseFloat(d?.motorTotal) ?? parseFloat(e?.motorTotal),
            optionsTotalMani: parseFloat(d?.optionsTotalMani) ?? parseFloat(e?.optionsTotalMani),
            feesTotal: parseFloat(d?.feesTotal) ?? parseFloat(e?.feesTotal),
            accTotal: parseFloat(d?.accTotal) ?? parseFloat(e?.accTotal),
            modelSpecOpt: parseFloat(d?.modelSpecOpt) ?? parseFloat(e?.modelSpecOpt),
            maniTotal: parseFloat(d?.maniTotal) ?? parseFloat(e?.maniTotal),
            bmwTotal: parseFloat(d?.bmwTotal) ?? parseFloat(e?.bmwTotal),
            totalSum: parseFloat(d?.totalSum) ?? parseFloat(e?.totalSum),
            essentials: parseFloat(d?.essentials) ?? parseFloat(e?.essentials),
            options: parseFloat(d?.options) ?? parseFloat(e?.options),
            numberOfPayments: parseFloat(d?.numberOfPayments) ?? parseFloat(e?.numberOfPayments),
            panAmTubelessLacedWheels: parseFloat(d?.panAmTubelessLacedWheels) ?? parseFloat(e?.panAmTubelessLacedWheels),
            panAmAdpRide: parseFloat(d?.panAmAdpRide) ?? parseFloat(e?.panAmAdpRide),
            hdWarrAmount: parseFloat(d?.hdWarrAmount) ?? parseFloat(e?.hdWarrAmount),
            hdAcc: parseFloat(d?.hdAcc) ?? parseFloat(e?.hdAcc),
            contractTax: parseFloat(d?.contractTax) ?? parseFloat(e?.contractTax),
            beforeDiscount: parseFloat(d?.beforeDiscount) ?? parseFloat(e?.beforeDiscount),
            perDiscountGiven: parseFloat(d?.perDiscountGiven) ?? parseFloat(e?.perDiscountGiven),
            calcIntTotal: parseFloat(d?.calcIntTotal) ?? parseFloat(e?.calcIntTotal),
            calculateMonthly: parseFloat(d?.calculateMonthly) ?? parseFloat(e?.calculateMonthly),
            netDifference: parseFloat(d?.netDifference) ?? parseFloat(e?.netDifference),
            hstOnSubTotal: parseFloat(d?.hstOnSubTotal) ?? parseFloat(e?.hstOnSubTotal),
            hstPayableOnTrade: parseFloat(d?.hstPayableOnTrade) ?? parseFloat(e?.hstPayableOnTrade),
            rebate: parseFloat(d?.rebate) ?? parseFloat(e?.rebate),
            lienRegistratoinFee: parseFloat(d?.lienRegistratoinFee) ?? parseFloat(e?.lienRegistratoinFee),
            payableOnDel: parseFloat(d?.payableOnDel) ?? parseFloat(e?.payableOnDel),
            balanceFinanced: parseFloat(d?.balanceFinanced) ?? parseFloat(e?.balanceFinanced),
            netFinance: parseFloat(d?.netFinance) ?? parseFloat(e?.netFinance),
            netDiff: parseFloat(d?.netDiff) ?? parseFloat(e?.netDiff),
            newTaxAmount: parseFloat(d?.newTaxAmount) ?? parseFloat(e?.newTaxAmount),
            gasOnDel: parseFloat(d?.gasOnDel) ?? parseFloat(e?.gasOnDel),
            subTotal: parseFloat(d?.subTotal) ?? parseFloat(e?.subTotal),
            afterDeposit: parseFloat(d?.afterDeposit) ?? parseFloat(e?.afterDeposit),
            lienRegFee: parseFloat(d?.lienRegFee) ?? parseFloat(e?.lienRegFee),
            balanceToFinance: parseFloat(d?.balanceToFinance) ?? parseFloat(e?.balanceToFinance),
            netAmountFinanced: parseFloat(d?.netAmountFinanced) ?? parseFloat(e?.netAmountFinanced),
            costOfBorrowing: parseFloat(d?.costOfBorrowing) ?? parseFloat(e?.costOfBorrowing),
            //#: .d?//# ?? .e?//#,
            InPerson: Number(d?.InPerson) ?? Number(e?.InPerson),
            Phone: Number(d?.Phone) ?? Number(e?.Phone),
            SMS: Number(d?.SMS) ?? Number(e?.SMS),
            Email: Number(d?.Email) ?? Number(e?.Email),
            Other: Number(d?.Other) ?? Number(e?.Other),
            //#: .d?//# ?? .e?//#,
            referral: d?.referral ?? e?.referral,
            visited: d?.visited ?? e?.visited,
            bookedApt: d?.bookedApt ?? e?.bookedApt,
            aptShowed: d?.aptShowed ?? e?.aptShowed,
            aptNoShowed: d?.aptNoShowed ?? e?.aptNoShowed,
            testDrive: d?.testDrive ?? e?.testDrive,
            metService: d?.metService ?? e?.metService,
            metManager: d?.metManager ?? e?.metManager,
            metParts: d?.metParts ?? e?.metParts,
            sold: d?.sold ?? e?.sold,
            depositMade: d?.depositMade ?? e?.depositMade,
            depositTakenDate: d?.depositTakenDate ?? e?.depositTakenDate,
            refund: d?.refund ?? e?.refund,
            turnOver: d?.turnOver ?? e?.turnOver,
            financeApp: d?.financeApp ?? e?.financeApp,
            approved: d?.approved ?? e?.approved,
            signed: d?.signed ?? e?.signed,
            pickUpSet: d?.pickUpSet ?? e?.pickUpSet,
            demoed: d?.demoed ?? e?.demoed,
            lastContact: d?.lastContact ?? e?.lastContact,
            status: d?.status ?? e?.status,
            customerState: d?.customerState ?? e?.customerState,
            result: d?.result ?? e?.result,
            timesContacted: d?.timesContacted ?? e?.timesContacted,
            nextAppointment: d?.nextAppointment ?? e?.nextAppointment,
            followUpDay: d?.followUpDay ?? e?.followUpDay,
            deliveryDate: d?.deliveryDate ?? e?.deliveryDate,
            delivered: d?.delivered ?? e?.delivered,
            deliveredDate: d?.deliveredDate ?? e?.deliveredDate,
            notes: d?.notes ?? e?.notes,
            visits: d?.visits ?? e?.visits,
            progress: d?.progress ?? e?.progress,
            metSalesperson: d?.metSalesperson ?? e?.metSalesperson,
            metFinance: d?.metFinance ?? e?.metFinance,
            financeApplication: d?.financeApplication ?? e?.financeApplication,
            pickUpDate: d?.pickUpDate ?? e?.pickUpDate,
            pickUpTime: d?.pickUpTime ?? e?.pickUpTime,
            docsSigned: d?.docsSigned ?? e?.docsSigned,
            tradeRepairs: d?.tradeRepairs ?? e?.tradeRepairs,
            seenTrade: d?.seenTrade ?? e?.seenTrade,
            lastNote: d?.lastNote ?? e?.lastNote,
            applicationDone: d?.applicationDone ?? e?.applicationDone,
            licensingSent: d?.licensingSent ?? e?.licensingSent,
            liceningDone: d?.liceningDone ?? e?.liceningDone,
            refunded: d?.refunded ?? e?.refunded,
            cancelled: d?.cancelled ?? e?.cancelled,
            lost: d?.lost ?? e?.lost,
            dLCopy: d?.dLCopy ?? e?.dLCopy,
            insCopy: d?.insCopy ?? e?.insCopy,
            testDrForm: d?.testDrForm ?? e?.testDrForm,
            voidChq: d?.voidChq ?? e?.voidChq,
            loanOther: d?.loanOther ?? e?.loanOther,
            signBill: d?.signBill ?? e?.signBill,
            ucda: d?.ucda ?? e?.ucda,
            tradeInsp: d?.tradeInsp ?? e?.tradeInsp,
            funded: d?.funded ?? e?.funded,
            quoted: d?.quoted ?? e?.quoted,
            customerWS: d?.customerWS ?? e?.customerWS,
            otherDocs: d?.otherDocs ?? e?.otherDocs,
            urgentFinanceNote: d?.urgentFinanceNote ?? e?.urgentFinanceNote,
            leadSource: d?.leadSource ?? e?.leadSource,
            financeDeptProductsTotal: d?.financeDeptProductsTotal ?? e?.financeDeptProductsTotal,
            bank: d?.bank ?? e?.bank,
            loanNumber: d?.loanNumber ?? e?.loanNumber,
            idVerified: d?.idVerified ?? e?.idVerified,
            dealerCommission: d?.dealerCommission ?? e?.dealerCommission,
            financeCommission: d?.financeCommission ?? e?.financeCommission,
            salesCommission: d?.salesCommission ?? e?.salesCommission,
            firstPayment: d?.firstPayment ?? e?.firstPayment,
            loanMaturity: d?.loanMaturity ?? e?.loanMaturity,
            clientfileId: d?.clientfileId ?? e?.clientfileId,
            inventoryMotorcycleId: d?.inventoryMotorcycleId ?? e?.inventoryMotorcycleId,
            financeStorageId: d?.financeStorageId ?? e?.financeStorageId,
            //#: .d?//# ?? .e?//#,
            finAppFullName: d?.finAppFullName ?? e?.finAppFullName,
            relationship: d?.relationship ?? e?.relationship,
            sin: d?.sin ?? e?.sin,
            streetAddress: d?.streetAddress ?? e?.streetAddress,
            addressDuration: d?.addressDuration ?? e?.addressDuration,
            finAppCity: d?.finAppCity ?? e?.finAppCity,
            finAppPostal: d?.finAppPostal ?? e?.finAppPostal,
            finAppProv: d?.finAppProv ?? e?.finAppProv,
            employer: d?.employer ?? e?.employer,
            job: d?.job ?? e?.job,
            employmentStatus: d?.employmentStatus ?? e?.employmentStatus,
            employerAddress: d?.employerAddress ?? e?.employerAddress,
            employerCity: d?.employerCity ?? e?.employerCity,
            employerProvince: d?.employerProvince ?? e?.employerProvince,
            employerPostal: d?.employerPostal ?? e?.employerPostal,
            employerPhone: d?.employerPhone ?? e?.employerPhone,
            employmentDuration: d?.employmentDuration ?? e?.employmentDuration,
            managerName: d?.managerName ?? e?.managerName,
            managerContact: d?.managerContact ?? e?.managerContact,
            employer2: d?.employer2 ?? e?.employer2,
            job2: d?.job2 ?? e?.job2,
            employerAddress2: d?.employerAddress2 ?? e?.employerAddress2,
            employerCity2: d?.employerCity2 ?? e?.employerCity2,
            employerProvince2: d?.employerProvince2 ?? e?.employerProvince2,
            employerPostal2: d?.employerPostal2 ?? e?.employerPostal2,
            employerPhone2: d?.employerPhone2 ?? e?.employerPhone2,
            employmentDuration2: d?.employmentDuration2 ?? e?.employmentDuration2,
            managerName2: d?.managerName2 ?? e?.managerName2,
            managerContact2: d?.managerContact2 ?? e?.managerContact2,
            monthlyGrossIncome: d?.monthlyGrossIncome ?? e?.monthlyGrossIncome,
            bankName: d?.bankName ?? e?.bankName,
            branchAddress: d?.branchAddress ?? e?.branchAddress,
            mortgagePayment: d?.mortgagePayment ?? e?.mortgagePayment,
            utilities: d?.utilities ?? e?.utilities,
            propertyTaxes: d?.propertyTaxes ?? e?.propertyTaxes,
            loanType: d?.loanType ?? e?.loanType,
            loanMonthlyPayment: d?.loanMonthlyPayment ?? e?.loanMonthlyPayment,
            loanType2: d?.loanType2 ?? e?.loanType2,
            loanMonthlyPayment2: d?.loanMonthlyPayment2 ?? e?.loanMonthlyPayment2,
            loanType3: d?.loanType3 ?? e?.loanType3,
            loanMonthlyPayment3: d?.loanMonthlyPayment3 ?? e?.loanMonthlyPayment3,
            loanType4: d?.loanType4 ?? e?.loanType4,
            loanMonthlyPayment4: d?.loanMonthlyPayment4 ?? e?.loanMonthlyPayment4,
            loanType5: d?.loanType5 ?? e?.loanType5,
            loanMonthlyPayment5: d?.loanMonthlyPayment5 ?? e?.loanMonthlyPayment5,
            loanType6: d?.loanType6 ?? e?.loanType6,
            loanMonthlyPayment6: d?.loanMonthlyPayment6 ?? e?.loanMonthlyPayment6,
            loanType7: d?.loanType7 ?? e?.loanType7,
            loanMonthlyPayment7: d?.loanMonthlyPayment7 ?? e?.loanMonthlyPayment7,
            appNote: d?.appNote ?? e?.appNote,
            //: .d?// ?? .e?//,
            salesStatus: d?.salesStatus ?? e?.salesStatus,
          }
        })
      },
      async fIdFinApp(d) {
        const e = await prisma.finance.findUnique({ where: { id: d?.financeId } });
        if (!e) { throw new Error("finance not found"); }
        return await prisma.finance.update({
          where: { id: d?.financeId },
          data: {
            finAppFullName: d?.finAppFullName ?? e?.finAppFullName,
            relationship: d?.relationship ?? e?.relationship,
            sin: d?.sin ?? e?.sin,
            streetAddress: d?.streetAddress ?? e?.streetAddress,
            addressDuration: d?.addressDuration ?? e?.addressDuration,
            finAppCity: d?.finAppCity ?? e?.finAppCity,
            finAppPostal: d?.finAppPostal ?? e?.finAppPostal,
            finAppProv: d?.finAppProv ?? e?.finAppProv,
            employer: d?.employer ?? e?.employer,
            job: d?.job ?? e?.job,
            employmentStatus: d?.employmentStatus ?? e?.employmentStatus,
            employerAddress: d?.employerAddress ?? e?.employerAddress,
            employerCity: d?.employerCity ?? e?.employerCity,
            employerProvince: d?.employerProvince ?? e?.employerProvince,
            employerPostal: d?.employerPostal ?? e?.employerPostal,
            employerPhone: d?.employerPhone ?? e?.employerPhone,
            employmentDuration: d?.employmentDuration ?? e?.employmentDuration,
            managerName: d?.managerName ?? e?.managerName,
            managerContact: d?.managerContact ?? e?.managerContact,
            employer2: d?.employer2 ?? e?.employer2,
            job2: d?.job2 ?? e?.job2,
            employerAddress2: d?.employerAddress2 ?? e?.employerAddress2,
            employerCity2: d?.employerCity2 ?? e?.employerCity2,
            employerProvince2: d?.employerProvince2 ?? e?.employerProvince2,
            employerPostal2: d?.employerPostal2 ?? e?.employerPostal2,
            employerPhone2: d?.employerPhone2 ?? e?.employerPhone2,
            employmentDuration2: d?.employmentDuration2 ?? e?.employmentDuration2,
            managerName2: d?.managerName2 ?? e?.managerName2,
            managerContact2: d?.managerContact2 ?? e?.managerContact2,
            monthlyGrossIncome: d?.monthlyGrossIncome ?? e?.monthlyGrossIncome,
            bankName: d?.bankName ?? e?.bankName,
            branchAddress: d?.branchAddress ?? e?.branchAddress,
            mortgagePayment: d?.mortgagePayment ?? e?.mortgagePayment,
            utilities: d?.utilities ?? e?.utilities,
            propertyTaxes: d?.propertyTaxes ?? e?.propertyTaxes,
            loanType: d?.loanType ?? e?.loanType,
            loanMonthlyPayment: d?.loanMonthlyPayment ?? e?.loanMonthlyPayment,
            loanType2: d?.loanType2 ?? e?.loanType2,
            loanMonthlyPayment2: d?.loanMonthlyPayment2 ?? e?.loanMonthlyPayment2,
            loanType3: d?.loanType3 ?? e?.loanType3,
            loanMonthlyPayment3: d?.loanMonthlyPayment3 ?? e?.loanMonthlyPayment3,
            loanType4: d?.loanType4 ?? e?.loanType4,
            loanMonthlyPayment4: d?.loanMonthlyPayment4 ?? e?.loanMonthlyPayment4,
            loanType5: d?.loanType5 ?? e?.loanType5,
            loanMonthlyPayment5: d?.loanMonthlyPayment5 ?? e?.loanMonthlyPayment5,
            loanType6: d?.loanType6 ?? e?.loanType6,
            loanMonthlyPayment6: d?.loanMonthlyPayment6 ?? e?.loanMonthlyPayment6,
            loanType7: d?.loanType7 ?? e?.loanType7,
            loanMonthlyPayment7: d?.loanMonthlyPayment7 ?? e?.loanMonthlyPayment7,
            appNote: d?.appNote ?? e?.appNote,
            //: .d?// ?? .e?//,
            salesStatus: d?.salesStatus ?? e?.salesStatus,
          }
        })
      },
      async overview(d, days) {
 return await prisma.finance.update({
  where: { id: d.id },
  data: {
    tax: d.tax,
    principal: d.principal,
    totalInterestCost: d.totalInterestCost,
    discount: d.discount,
    total: d.total,
    deposit: d.deposit,
    totalWithOptions: d.totalWithOptions,
    lien: d.lien,
    deliveryCharge: d.deliveryCharge,
    labour: d.labour,
    pdi: d.pdi,
    commodity: d.commodity,
    admin: d.admin,
    freight: d.freight,
    licensing: d.licensing,
    year: d.year,
    brand: d.brand,
    model: d.model,
    msrp: d.msrp,
    trim: d.trim,
    accessories: parseFloat(d.accessories) || 0.0,
    feesTotal: parseFloat(d.feesTotal) || 0.0,
    boatEngineAndTrailerFees: parseFloat(d.boatEngineAndTrailerFees) || 0.0,
    engineFreight: parseFloat(d.engineFreight) || 0.0,
    enginePreRigPrice: parseFloat(d.enginePreRigPrice) || 0.0,
    engineRigging: parseFloat(d.engineRigging) || 0.0,
    nmma: parseFloat(d.nmma) || 0.0,
    trailer: parseFloat(d.trailer) || 0.0,
    totalSum: parseFloat(d.totalSum) || null,
    essentials: parseFloat(d.essentials) || null,
    options: parseFloat(d.options) || null,
    numberOfPayments: d.desiredPaymentsOther === 'Monthly' ? parseFloat(d.months) :
      d.desiredPaymentsOther === 'Bi-weekly' ? parseFloat(d.months) * 26 :
        d.desiredPaymentsOther === 'Weekly' ? parseFloat(d.months) * 52 : null,
    lastContact: String(new Date()),
    followUpDay: days && String(days),
    nextAppointment: days && String(days),
    metSalesperson: String(new Date()),
    quoted: String(new Date()),
    tradeRepairs: "0",
    sub: String(d.sub),
    contractTotal: String(d.contractTotal),
    contractTotalWithLicOmv: String(d.contractTotalWithLicOmv),
    afterDeposit: parseFloat(d.afterDeposit) || null,
  },
});
      },
      async overviewDrawer(d) {
        return await prisma.finance.update({
          where: { id: d.id },
          data: {
            //#region
            discount: d.discount,
            discountPer: d.discountPer,
            paymentFreq: d.paymentFreq,
            deliveryCharge: d.deliveryCharge,
            warrMonths: d.warrMonths,
            warrKms: d.warrKms,
            warrName: d.warrName,
            address: d.address,
            city: d.city,
            postal: d.postal,
            province: d.province,
            dl: d.dl,
            typeOfContact: d.typeOfContact,
            timeToContact: d.timeToContact,
            dob: d.dob,
            desiredPaymentsOther: d.desiredPaymentsOther ? d.desiredPaymentsOther : null,
            paymentStartDate: d.paymentStartDate ? String(d.paymentStartDate) : null,
            deliveryDate: d.deliveryDate ? String(d.deliveryDate) : null,
          },
        })
      },
      async d(d) { return await prisma.finance.delete({ where: { id: d.id } }) },
      //#region
      async findWithBasicInfo(id: string) {
        return await prisma.finance.findUnique({
          where: { id },
          select: {
            id: true,
            createdAt: true,
            updatedAt: true,
            dealerId: true,
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
            financeManagerName: true,
            status: true,
            customerState: true,
            year: true,
            brand: true,
            model: true,
            color: true,
            stockNum: true,
            vin: true
          }
        });
      },

      async findWithClientInfo(id: string) {
        return await prisma.finance.findUnique({
          where: { id },
          select: {
            id: true,
            createdAt: true,
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
            address: true,
            city: true,
            province: true,
            postal: true,
            dl: true,
            dob: true,
            Clientfile: {
              select: {
                id: true,
                firstName: true,
                lastName: true,
                email: true,
                phone: true,
                address: true,
                city: true,
                province: true,
                postal: true
              }
            }
          }
        });
      },
      async findWithVehicleInfo(id: string) {
        return await prisma.finance.findUnique({
          where: { id },
          select: {
            id: true,
            stockNum: true,
            year: true,
            brand: true,
            model: true,
            model1: true,
            color: true,
            modelCode: true,
            msrp: true,
            trim: true,
            bikeStatus: true,
            vin: true,
            invId: true,
            motor: true,
            tag: true,
            mileage: true,
            InventoryMotorcycle: {
              select: {
                id: true,
                stockNum: true,
                vin: true,
                year: true,
                make: true,
                model: true,
                price: true,
                mileage: true,
                status: true,
                GalleryImage: {
                  where: { isPrimary: true },
                  take: 1,
                  select: {
                    url: true,
                    alt: true
                  }
                }
              }
            }
          }
        });
      },
      async findWithPaymentDetails(id: string) {
        return await prisma.finance.findUnique({
          where: { id },
          select: {
            id: true,
            financeDeal: true,
            financeManagerName: true,
            paymentFreq: true,
            iRate: true,
            months: true,
            monthly: true,
            biweekly: true,
            weekly: true,
            deposit: true,
            total: true,
            discount: true,
            tax: true,
            withTax: true,
            sub: true,
            contractTotal: true,
            Payment: {
              select: {
                id: true,
                createdAt: true,
                paymentType: true,
                cardType: true,
                amountPaid: true,
                receiptId: true
              }
            }
          }
        });
      },
      async findWithTradeInfo(id: string) {
        return await prisma.finance.findUnique({
          where: { id },
          select: {
            id: true,
            tradeValue: true,
            tradeDesc: true,
            tradeColor: true,
            tradeYear: true,
            tradeMake: true,
            tradeVin: true,
            tradeTrim: true,
            tradeMileage: true,
            tradeLocation: true,
            FinanceTradeUnit: {
              select: {
                id: true,
                price: true,
                brand: true,
                model: true,
                color: true,
                year: true,
                vin: true,
                trim: true,
                mileage: true,
                condition: true,
                repairs: true,
                tradeEval: true
              }
            }
          }
        });
      },
      async findWithSalesProgress(id: string) {
        return await prisma.finance.findUnique({
          where: { id },
          select: {
            id: true,
            status: true,
            customerState: true,
            visited: true,
            bookedApt: true,
            aptShowed: true,
            testDrive: true,
            sold: true,
            depositMade: true,
            depositTakenDate: true,
            financeApp: true,
            approved: true,
            signed: true,
            pickUpSet: true,
            progress: true,
            timesContacted: true,
            nextAppointment: true,
            deliveryDate: true,
            delivered: true,
            deliveredDate: true,
            lastContact: true,
            lastNote: true,
            FinanceNote: {
              orderBy: { createdAt: 'desc' },
              select: {
                id: true,
                createdAt: true,
                userEmail: true,
                userName: true,
                note: true
              }
            }
          }
        });
      },
      async findComplete(id: string) {
        return await prisma.finance.findUnique({
          where: { id },
          include: FinanceObj
        });
      },
      async findBySalesStatus(status: string, limit = 20) {
        return await prisma.finance.findMany({
          where: { salesStatus: status },
          select: {
            id: true,
            createdAt: true,
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
            year: true,
            brand: true,
            model: true,
            color: true,
            status: true,
            customerState: true,
            progress: true,
            lastContact: true
          },
          orderBy: { createdAt: 'desc' },
          take: limit
        });
      },
      async findByCustomerState(customerState: string, limit = 20) {
        return await prisma.finance.findMany({
          where: { customerState },
          select: {
            id: true,
            createdAt: true,
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
            year: true,
            brand: true,
            model: true,
            color: true,
            status: true,
            lastContact: true,
            nextAppointment: true
          },
          orderBy: { createdAt: 'desc' },
          take: limit
        });
      },
      async findByDateRange(startDate: Date, endDate: Date, limit = 50) {
        return await prisma.finance.findMany({
          where: {
            createdAt: {
              gte: startDate,
              lte: endDate
            }
          },
          select: {
            id: true,
            createdAt: true,
            firstName: true,
            lastName: true,
            email: true,
            phone: true,
            year: true,
            brand: true,
            model: true,
            color: true,
            status: true,
            customerState: true,
            financeManagerName: true
          },
          orderBy: { createdAt: 'desc' },
          take: limit
        });
      }
      //#endregion
    },
    lockFinanceTerminals: {
      async c(d, user) {
        return await prisma.lockFinanceTerminals.create({
          data: {
            locked: true,
            dealerId: d.dealerId,
            salesEmail: user.email,
            salesName: user.username,
          },
        })
      },
      async response(d, user) {
        return await prisma.lockFinanceTerminals.update({
          where: { id: d.claimId },
          data: {
            response: true,
            financeEmail: user.email,
financeName: user.username,
          },
        })
      },
    },
    inventoryMotorcycle: {
      async all() { return await prisma.inventoryMotorcycle.findMany({ include: InventoryMotorcycleObj }) },
      async allST(skip, top) { return await prisma.inventoryMotorcycle.findMany({ include: InventoryMotorcycleObj, skip: skip, take: top }) },
      async availST(skip, top) { return await prisma.inventoryMotorcycle.findMany({ where: { sold: false }, include: InventoryMotorcycleObj, skip: skip, take: top }) },
      async wish() { return await prisma.inventoryMotorcycle.findMany({ select: { make: true, model: true, status: true } }) },

    },
    wishList: {
      async one(email) { return await prisma.wishlist.upsert({ where: { email: email }, update: {}, create: { clientId: userId } }) },
    },
    workOrder: {
      async all() { return await prisma.workOrder.findMany({ include: WorkOrderObj }) },
    },
    user: {
      async all(email) { return await prisma.user.findUnique({ where: { email }, include: userSelection }) },
      async a(email) { return await prisma.user.findUnique({ where: { email }, include: userSelection }) },
      async include(email, include) { return await prisma.user.findUnique({ where: { email }, include: include }) },
      async simple(email) {
        return await prisma.user.findUnique({
          where: { email }, include: {
            positions: true,
            customerSync: true,
          }
        })
      },
    },


    stockDataDesc: {
      async all(m) { return await prisma.stockDataDesc.findMany({ where: { year: m?.year, brand: m?.make } }) },
    },
    stockDataDescTitle: {
      async all(m) { return await prisma.stockDataDescTitle.findMany({ where: { year: m?.year, brand: m?.make } }) },
    },
    stockDataTagline: {
      async all(m) { return await prisma.stockDataTagline.findMany({ where: { year: m?.year, brand: m?.make } }) },
    },
    stockDataSpec: {
      async all(m) { return await prisma.stockDataSpec.findMany({ where: { year: m?.year, brand: m?.make } }) },
    },
    stockDataOption: {
      async all(m) { return await prisma.stockDataOption.findMany({ where: { year: m?.year, brand: m?.make } }) },
    },
    stockDataHighlight: {
      async all(m) { return await prisma.stockDataHighlight.findMany({ where: { year: m?.year, brand: m?.make } }) },
    },
    stockDataGalleryImage: {
      async all(m) { return await prisma.stockDataGalleryImage.findMany({ where: { year: m?.year, brand: m?.make } }) },
    },
    stockDataPackage: {
      async all(m) {
        return await prisma.stockDataPackage.findMany({
          where: { year: m?.year, brand: m?.make },
          select: {
            id: true,
            createdAt: true,
            updatedAt: true,
            year: true,
            brand: true,
            model: true,
            //: true,
            title: true,
            description: true,
            image: true,
            price: true,
            StockDataPackageOption: {
              select: {
                id: true,
                optionId: true,
                title: true,
                description: true,
                image: true,
                stockDataPackageId: true,
              }
            }
          }
        })
      },
    },
  },
  query: {
    async salesTrackerData(startDate: Date, endDate: Date, userId?: string) {
      // Base query conditions for date range
      const dateFilter = {
        createdAt: {
          gte: startDate,
          lte: endDate
        }
      };

      // Add optional user filter if userId is provided
      const userFilter = userId ? { userEmail: userId } : {};

      const whereClause = {
        ...dateFilter,
        ...userFilter
      };

      // Execute all queries in parallel for performance
      const [
        // Basic counts
        totalFinanceDeals,
        completedDeals,
        pendingDeals,
        inProgressDeals,
        cancelledDeals,
        lostDeals,

        // Test drive metrics
        testDrives,

        // Financial process metrics
        dealsWithDeposit,
        financedDeals,
        approvedFinanceApps,
        signedDeals,
        deliveredDeals,
        refundedDeals,

        // Visit metrics
        clientsVisited,
        clientsWithAppointments,
        noShowAppointments,

        // Document metrics
        dealsWithSignedDocs,
        dealsWithLicensingComplete,

        // Revenue metrics
        totalRevenue,
        avgDealValue,

        // Brand metrics
        salesByBrand,
        profitByBrand,

        // Appointment metrics
        appointmentsByType,
        appointmentCompletionRate,

        // Lead source performance
        leadSources,

        // Payment data
        paymentFrequencyDistribution,

        // Sales funnel metrics
        salesFunnelMetrics,

        // Customer interaction counts
        customerInteractions,

        // Finance products metrics
        financeProductsData,

        // Commission data
        commissionData,

        // Timeline metrics (average days between stages)
        timelineMetrics

      ] = await Promise.all([
        // Basic counts
        prisma.finance.count({
          where: whereClause
        }),

        prisma.finance.count({
          where: {
            ...whereClause,
            status: 'Completed'
          }
        }),

        prisma.finance.count({
          where: {
            ...whereClause,
            status: 'Pending'
          }
        }),

        prisma.finance.count({
          where: {
            ...whereClause,
            status: 'In Progress'
          }
        }),

        prisma.finance.count({
          where: {
            ...whereClause,
            status: 'Cancelled'
          }
        }),

        prisma.finance.count({
          where: {
            ...whereClause,
            status: 'Lost'
          }
        }),

        // Test drive metrics
        prisma.finance.count({
          where: {
            ...whereClause,
            testDrive: { not: null }
          }
        }),

        // Financial process metrics
        prisma.finance.count({
          where: {
            ...whereClause,
            depositTakenDate: { not: null }
          }
        }),

        prisma.finance.count({
          where: {
            ...whereClause,
            financeApp: { not: null }
          }
        }),

        prisma.finance.count({
          where: {
            ...whereClause,
            approved: { not: null }
          }
        }),

        prisma.finance.count({
          where: {
            ...whereClause,
            signed: { not: null }
          }
        }),

        prisma.finance.count({
          where: {
            ...whereClause,
            deliveredDate: { not: null }
          }
        }),

        prisma.finance.count({
          where: {
            ...whereClause,
            refunded: { not: null }
          }
        }),

        // Visit metrics
        prisma.finance.count({
          where: {
            ...whereClause,
            visited: { not: null }
          }
        }),

        prisma.finance.count({
          where: {
            ...whereClause,
            bookedApt: { not: null }
          }
        }),

        prisma.finance.count({
          where: {
            ...whereClause,
            aptNoShowed: { not: null }
          }
        }),

        // Document metrics
        prisma.finance.count({
          where: {
            ...whereClause,
            docsSigned: { not: null }
          }
        }),

        prisma.finance.count({
          where: {
            ...whereClause,
            liceningDone: { not: null }
          }
        }),

        // Revenue metrics
        prisma.finance.aggregate({
          where: {
            ...whereClause,
            status: 'Completed',
            total: { not: null }
          },
          _sum: {
            totalSum: true
          }
        }),

        prisma.finance.aggregate({
          where: {
            ...whereClause,
            status: 'Completed',
            total: { not: null }
          },
          _avg: {
            totalSum: true
          }
        }),

        // Brand metrics
        prisma.finance.groupBy({
          by: ['brand'],
          where: {
            ...whereClause,
            status: 'Completed',
            brand: { not: null }
          },
          _count: {
            id: true
          },
          orderBy: {
            _count: {
              id: 'desc'
            }
          }
        }),

        prisma.finance.groupBy({
          by: ['brand'],
          where: {
            ...whereClause,
            status: 'Completed',
            brand: { not: null },
            grossProfit: { not: null }
          },
          _sum: {
            motorTotal: true
          },
          orderBy: {
            _sum: {
              motorTotal: 'desc'
            }
          }
        }),

        // Appointment metrics
        prisma.clientApts.groupBy({
          by: ['apptType'],
          where: {
            createdAt: {
              gte: startDate,
              lte: endDate
            },
            ...(userId ? { userEmail: userId } : {})
          },
          _count: {
            id: true
          }
        }),

        prisma.clientApts.groupBy({
          by: ['completed'],
          where: {
            createdAt: {
              gte: startDate,
              lte: endDate
            },
            ...(userId ? { userEmail: userId } : {})
          },
          _count: {
            id: true
          }
        }),

        // Lead source performance
        prisma.finance.groupBy({
          by: ['leadSource'],
          where: {
            ...whereClause,
            leadSource: { not: null }
          },
          _count: {
            id: true
          },
          orderBy: {
            _count: {
              id: 'desc'
            }
          }
        }),

        // Payment frequency distribution
        prisma.finance.groupBy({
          by: ['paymentFreq'],
          where: {
            ...whereClause,
            paymentFreq: { not: null }
          },
          _count: {
            id: true
          }
        }),

        // Sales funnel metrics - all the stages and their counts
        prisma.$transaction([
          prisma.finance.count({ where: { ...whereClause, visited: { not: null } } }),
          prisma.finance.count({ where: { ...whereClause, testDrive: { not: null } } }),
          prisma.finance.count({ where: { ...whereClause, depositTakenDate: { not: null } } }),
          prisma.finance.count({ where: { ...whereClause, financeApp: { not: null } } }),
          prisma.finance.count({ where: { ...whereClause, approved: { not: null } } }),
          prisma.finance.count({ where: { ...whereClause, docsSigned: { not: null } } }),
          prisma.finance.count({ where: { ...whereClause, deliveredDate: { not: null } } })
        ]),

        // Customer interaction counts
        prisma.finance.aggregate({
          where: whereClause,
          _sum: {
            InPerson: true,
            Phone: true,
            SMS: true,
            Email: true,
            Other: true
          }
        }),

        // Finance products data
        prisma.financeDeptProducts.groupBy({
          by: ['productName'],
          where: {
            Finance: {
              createdAt: {
                gte: startDate,
                lte: endDate
              },
              ...(userId ? { userEmail: userId } : {})
            }
          },
          _count: {
            id: true
          },
          _sum: {
            value: true
          }
        }),

        // Commission data
        prisma.finance.aggregate({
          where: {
            ...whereClause,
            status: 'Completed'
          },
          _sum: {
            dealerCommission: true,
            financeCommission: true,
            salesCommission: true
          },
          _avg: {
            dealerCommission: true,
            financeCommission: true,
            salesCommission: true
          }
        }),

        // Timeline metrics - average time between stages
        prisma.finance.findMany({
          where: {
            ...whereClause,
            status: 'Completed',
            visitedDate: { not: null },
            depositTakenDate: { not: null },
            financeApp: { not: null },
            approved: { not: null },
            signed: { not: null },
            deliveredDate: { not: null }
          },
          select: {
            visited: true,
            depositTakenDate: true,
            financeApp: true,
            approved: true,
            signed: true,
            deliveredDate: true
          }
        })
      ]);

      // Process the sales funnel data for better visualization
      const [visitedCount, testDriveCount, depositCount, financeAppCount, approvedCount, signedCount, deliveredCount] = salesFunnelMetrics;

      const salesFunnelData = [
        { stage: 'Visited', count: visitedCount },
        { stage: 'Test Drive', count: testDriveCount },
        { stage: 'Deposit', count: depositCount },
        { stage: 'Finance App', count: financeAppCount },
        { stage: 'Approved', count: approvedCount },
        { stage: 'Signed', count: signedCount },
        { stage: 'Delivered', count: deliveredCount }
      ];

      // Calculate conversion rates between stages
      const salesFunnelConversion = salesFunnelData.map((stage, index) => {
        if (index === 0) return { stage: stage.stage, rate: 100 };
        const previousStage = salesFunnelData[index - 1].count;
        const rate = previousStage > 0 ? (stage.count / previousStage) * 100 : 0;
        return { stage: stage.stage, rate: Math.round(rate * 100) / 100 };
      });

      // Process appointment completion data
      const totalAppts = appointmentCompletionRate.reduce((sum, item) => sum + item._count.id, 0);
      const completedAppts = appointmentCompletionRate.find(item => item.completed === 'yes')?._count.id || 0;
      const completionRate = totalAppts > 0 ? (completedAppts / totalAppts) * 100 : 0;

      // Calculate average days between deal stages for completed deals
      let timelineSummary = {
        visitToDeposit: 0,
        depositToFinanceApp: 0,
        financeAppToApproval: 0,
        approvalToSigning: 0,
        signingToDelivery: 0,
        totalDealTime: 0
      };

      if (timelineMetrics.length > 0) {
        // Helper function to calculate days between dates
        const daysBetween = (dateStr1, dateStr2) => {
          if (!dateStr1 || !dateStr2) return null;
          const date1 = new Date(dateStr1);
          const date2 = new Date(dateStr2);
          return Math.round((date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24));
        };

        let validDeals = 0;
        let totalVisitToDeposit = 0;
        let totalDepositToApp = 0;
        let totalAppToApproval = 0;
        let totalApprovalToSigning = 0;
        let totalSigningToDelivery = 0;
        let totalDealDuration = 0;

        timelineMetrics.forEach(deal => {
          if (deal.visited && deal.deliveredDate) {
            validDeals++;

            const visitToDeposit = daysBetween(deal.visited, deal.depositTakenDate);
            const depositToApp = daysBetween(deal.depositTakenDate, deal.financeApp);
            const appToApproval = daysBetween(deal.financeApp, deal.approved);
            const approvalToSigning = daysBetween(deal.approved, deal.signed);
            const signingToDelivery = daysBetween(deal.signed, deal.deliveredDate);
            const totalDuration = daysBetween(deal.visited, deal.deliveredDate);

            if (visitToDeposit) totalVisitToDeposit += visitToDeposit;
            if (depositToApp) totalDepositToApp += depositToApp;
            if (appToApproval) totalAppToApproval += appToApproval;
            if (approvalToSigning) totalApprovalToSigning += approvalToSigning;
            if (signingToDelivery) totalSigningToDelivery += signingToDelivery;
            if (totalDuration) totalDealDuration += totalDuration;
          }
        });

        if (validDeals > 0) {
          timelineSummary = {
            visitToDeposit: Math.round((totalVisitToDeposit / validDeals) * 10) / 10,
            depositToFinanceApp: Math.round((totalDepositToApp / validDeals) * 10) / 10,
            financeAppToApproval: Math.round((totalAppToApproval / validDeals) * 10) / 10,
            approvalToSigning: Math.round((totalApprovalToSigning / validDeals) * 10) / 10,
            signingToDelivery: Math.round((totalSigningToDelivery / validDeals) * 10) / 10,
            totalDealTime: Math.round((totalDealDuration / validDeals) * 10) / 10
          };
        }
      }

      // Format the appointment data
      const appointmentTypeData = appointmentsByType.map(type => ({
        type: type.apptType || 'Unspecified',
        count: type._count.id
      }));

      // Prepare the response object
      return {
        // Deal status metrics
        dealMetrics: {
          totalFinanceDeals,
          completedDeals,
          pendingDeals,
          inProgressDeals,
          cancelledDeals,
          lostDeals,
          conversionRate: totalFinanceDeals > 0 ? (completedDeals / totalFinanceDeals) * 100 : 0
        },

        // Sales process metrics
        salesProcessMetrics: {
          clientsVisited,
          testDrives,
          dealsWithDeposit,
          financedDeals,
          approvedFinanceApps,
          signedDeals,
          deliveredDeals,
          refundedDeals
        },

        // Appointment metrics
        appointmentMetrics: {
          clientsWithAppointments,
          noShowAppointments,
          appointmentTypeData,
          totalAppointments: totalAppts,
          completedAppointments: completedAppts,
          completionRate: Math.round(completionRate * 10) / 10
        },

        // Document metrics
        documentMetrics: {
          dealsWithSignedDocs,
          dealsWithLicensingComplete
        },

        // Revenue metrics
        revenueMetrics: {
          totalRevenue: totalRevenue._sum.totalSum || 0,
          avgDealValue: avgDealValue._avg.totalSum || 0
        },

        // Brand metrics
        brandMetrics: {
          salesByBrand: salesByBrand.map(item => ({
            brand: item.brand || 'Unspecified',
            count: item._count.id
          })),
          profitByBrand: profitByBrand.map(item => ({
            brand: item.brand || 'Unspecified',
            totalProfit: item._sum.motorTotal || 0
          }))
        },

        // Lead source metrics
        leadSourceMetrics: leadSources.map(source => ({
          source: source.leadSource || 'Unknown',
          count: source._count.id
        })),

        // Payment data
        paymentMetrics: {
          frequencyDistribution: paymentFrequencyDistribution.map(freq => ({
            frequency: freq.paymentFreq || 'Unspecified',
            count: freq._count.id
          }))
        },

        // Sales funnel visualization
        salesFunnel: {
          stages: salesFunnelData,
          conversionRates: salesFunnelConversion
        },

        // Customer interaction metrics
        customerInteractionMetrics: {
          inPerson: customerInteractions._sum.InPerson || 0,
          phone: customerInteractions._sum.Phone || 0,
          sms: customerInteractions._sum.SMS || 0,
          email: customerInteractions._sum.Email || 0,
          other: customerInteractions._sum.Other || 0,
          total: (customerInteractions._sum.InPerson || 0) +
            (customerInteractions._sum.Phone || 0) +
            (customerInteractions._sum.SMS || 0) +
            (customerInteractions._sum.Email || 0) +
            (customerInteractions._sum.Other || 0)
        },

        // Finance products metrics
        financeProductsMetrics: financeProductsData.map(product => ({
          product: product.productName || 'Unspecified',
          count: product._count.id,
          totalValue: product._sum.value || 0
        })),

        // Commission metrics
        commissionMetrics: {
          total: {
            dealer: commissionData._sum.dealerCommission || 0,
            finance: commissionData._sum.financeCommission || 0,
            sales: commissionData._sum.salesCommission || 0,
            combined: (commissionData._sum.dealerCommission || 0) +
              (commissionData._sum.financeCommission || 0) +
              (commissionData._sum.salesCommission || 0)
          },
          average: {
            dealer: commissionData._avg.dealerCommission || 0,
            finance: commissionData._avg.financeCommission || 0,
            sales: commissionData._avg.salesCommission || 0
          }
        },

        // Timeline metrics
        timelineMetrics: timelineSummary
      };
    },
    // Find the most popular accessories
    async mostPopularAcc(limit = 10) {
      const results = await prisma.accessoriesOnOrders.groupBy({
        by: ['accessoryId'],
        _sum: {
          quantity: true
        },
        orderBy: {
          _sum: {
            quantity: 'desc'
          }
        },
        take: limit
      });

      // Get the accessory details for each popular item
      const accessoryIds = results.map(item => item.accessoryId);
      return prisma.accessories.findMany({
        where: {
          id: { in: accessoryIds }
        },
        select: {
          id: true,
          name: true,
          price: true,
          shortDesc: true,
          GalleryImage: {
            where: { isPrimary: true },
            take: 1,
            select: {
              url: true
            }
          },
          _count: {
            select: {
              AccessoriesOnOrders: true
            }
          }
        }
      });
    },
    // Get sales dashboard data
    async accOrderSalesData(startDate: Date, endDate: Date) {
      const [totalSales, completedOrders, pendingOrders, topSellingItems] = await Promise.all([
        // Total sales in date range
        prisma.accOrder.aggregate({
          where: {
            status: 'Completed',
            createdAt: {
              gte: startDate,
              lte: endDate
            }
          },
          _sum: {
            total: true
          }
        }),
        // Count of completed orders
        prisma.accOrder.count({
          where: {
            status: 'Completed',
            createdAt: {
              gte: startDate,
              lte: endDate
            }
          }
        }),
        // Count of pending orders
        prisma.accOrder.count({
          where: {
            status: {
              in: ['Pending', 'Processing', 'On Backorder']
            },
            createdAt: {
              gte: startDate,
              lte: endDate
            }
          }
        }),
        // Top selling items in date range
        prisma.accessoriesOnOrders.groupBy({
          by: ['accessoryId'],
          where: {
            AccOrder: {
              createdAt: {
                gte: startDate,
                lte: endDate
              }
            }
          },
          _sum: {
            quantity: true
          },
          orderBy: {
            _sum: {
              quantity: 'desc'
            }
          },
          take: 5
        }).then(async (results) => {
          // Get accessory details
          const accessoryIds = results.map(item => item.accessoryId);
          const accessories = await prisma.accessories.findMany({
            where: {
              id: { in: accessoryIds }
            },
            select: {
              id: true,
              name: true
            }
          });

          // Match quantities with accessories
          return results.map(item => {
            const accessory = accessories.find(a => a.id === item.accessoryId);
            return {
              accessoryId: item.accessoryId,
              name: accessory?.name || 'Unknown',
              quantitySold: item._sum.quantity || 0
            };
          });
        })
      ]);
      return {
        totalSales: totalSales._sum.total || 0,
        completedOrders,
        pendingOrders,
        topSellingItems
      };
    },
    // Search across accessories and orders
    async globalSearch(searchTerm: string) {
      const [accessories, orders, clients] = await Promise.all([
        // Search accessories
        prisma.accessories.findMany({
          where: {
            OR: [
              { name: { contains: searchTerm, mode: 'insensitive' } },
              { sku: { contains: searchTerm, mode: 'insensitive' } },
              { partNumber: { contains: searchTerm, mode: 'insensitive' } },
              { description: { contains: searchTerm, mode: 'insensitive' } }
            ]
          },
          select: {
            id: true,
            name: true,
            sku: true,
            price: true,
            shortDesc: true,
            GalleryImage: {
              where: { isPrimary: true },
              take: 1,
              select: {
                url: true
              }
            }
          },
          take: 5
        }),

        // Search orders
        prisma.accOrder.findMany({
          where: {
            OR: [
              { dealerId: { contains: searchTerm, mode: 'insensitive' } },
              {
                Clientfile: {
                  OR: [
                    { firstName: { contains: searchTerm, mode: 'insensitive' } },
                    { lastName: { contains: searchTerm, mode: 'insensitive' } },
                    { email: { contains: searchTerm, mode: 'insensitive' } }
                  ]
                }
              }
            ]
          },
          select: {
            id: true,
            dealerId: true,
            createdAt: true,
            status: true,
            total: true,
            Clientfile: {
              select: {
                firstName: true,
                lastName: true
              }
            }
          },
          take: 5
        }),

        // Search clients
        prisma.clientfile.findMany({
          where: {
            OR: [
              { firstName: { contains: searchTerm, mode: 'insensitive' } },
              { lastName: { contains: searchTerm, mode: 'insensitive' } },
              { email: { contains: searchTerm, mode: 'insensitive' } },
              { phone: { contains: searchTerm, mode: 'insensitive' } }
            ]
          },
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
            phone: true
          },
          take: 5
        })
      ]);

      return {
        accessories,
        orders,
        clients
      };
    },
    /**
    * Dashboard statistics for finance
    */
    async financeStats(startDate: Date, endDate: Date) {
      const [
        totalFinanceDeals,
        completedDeals,
        pendingDeals,
        testDrives,
        salesByBrand
      ] = await Promise.all([
        // Count total finance deals
        prisma.finance.count({
          where: {
            createdAt: {
              gte: startDate,
              lte: endDate
            }
          }
        }),

        // Count completed deals
        prisma.finance.count({
          where: {
            createdAt: {
              gte: startDate,
              lte: endDate
            },
            status: 'Completed'
          }
        }),

        // Count pending deals
        prisma.finance.count({
          where: {
            createdAt: {
              gte: startDate,
              lte: endDate
            },
            status: {
              in: ['Pending', 'In Progress']
            }
          }
        }),

        // Count test drives
        prisma.finance.count({
          where: {
            createdAt: {
              gte: startDate,
              lte: endDate
            },
            testDrive: true
          }
        }),

        // Get sales by brand
        prisma.finance.groupBy({
          by: ['brand'],
          where: {
            createdAt: {
              gte: startDate,
              lte: endDate
            },
            status: 'Completed'
          },
          _count: true,
          orderBy: {
            _count: {
              id: 'desc'
            }
          }
        })
      ]);

      return {
        totalFinanceDeals,
        completedDeals,
        pendingDeals,
        testDrives,
        salesByBrand
      };
    },
    /**
     * Search finance records
     */
    async searchFinance(searchTerm: string, limit = 10) {
      return prisma.finance.findMany({
        where: {
          OR: [
            { firstName: { contains: searchTerm, mode: 'insensitive' } },
            { lastName: { contains: searchTerm, mode: 'insensitive' } },
            { email: { contains: searchTerm, mode: 'insensitive' } },
            { phone: { contains: searchTerm, mode: 'insensitive' } },
            { brand: { contains: searchTerm, mode: 'insensitive' } },
            { model: { contains: searchTerm, mode: 'insensitive' } },
            { stockNum: { contains: searchTerm, mode: 'insensitive' } },
            { vin: { contains: searchTerm, mode: 'insensitive' } }
          ]
        },
        select: {
          id: true,
          createdAt: true,
          firstName: true,
          lastName: true,
          email: true,
          phone: true,
          year: true,
          brand: true,
          model: true,
          color: true,
          stockNum: true,
          status: true,
          customerState: true
        },
        take: limit
      });
    },
    /**
     * Find finance deals that need follow-up
     */
    async findNeedFollowUp() {
      const today = new Date();
      const twoDaysAgo = new Date(today);
      twoDaysAgo.setDate(today.getDate() - 2);

      return prisma.finance.findMany({
        where: {
          status: {
            notIn: ['Completed', 'Lost', 'Cancelled']
          },
          lastContact: {
            lt: twoDaysAgo
          }
        },
        select: {
          id: true,
          createdAt: true,
          firstName: true,
          lastName: true,
          email: true,
          phone: true,
          year: true,
          brand: true,
          model: true,
          status: true,
          customerState: true,
          lastContact: true,
          financeManagerName: true
        },
        orderBy: {
          lastContact: 'asc'
        }
      });
    }
  }
});

export default eP;