/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "AggregatorV3Interface",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AggregatorV3Interface__factory>;
    getContractFactory(
      name: "OwnableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnableUpgradeable__factory>;
    getContractFactory(
      name: "IERC1822ProxiableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1822ProxiableUpgradeable__factory>;
    getContractFactory(
      name: "IERC1967Upgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1967Upgradeable__factory>;
    getContractFactory(
      name: "IBeaconUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBeaconUpgradeable__factory>;
    getContractFactory(
      name: "ERC1967UpgradeUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC1967UpgradeUpgradeable__factory>;
    getContractFactory(
      name: "Initializable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Initializable__factory>;
    getContractFactory(
      name: "UUPSUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.UUPSUpgradeable__factory>;
    getContractFactory(
      name: "PausableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PausableUpgradeable__factory>;
    getContractFactory(
      name: "ReentrancyGuardUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ReentrancyGuardUpgradeable__factory>;
    getContractFactory(
      name: "ContextUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ContextUpgradeable__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "ERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Enumerable__factory>;
    getContractFactory(
      name: "IERC721Enumerable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Enumerable__factory>;
    getContractFactory(
      name: "IERC721Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Metadata__factory>;
    getContractFactory(
      name: "IERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721__factory>;
    getContractFactory(
      name: "IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC721Holder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721Holder__factory>;
    getContractFactory(
      name: "ERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC165__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "ITablelandTables",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITablelandTables__factory>;
    getContractFactory(
      name: "TablelandDeployments",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TablelandDeployments__factory>;
    getContractFactory(
      name: "CurrencyPrice",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CurrencyPrice__factory>;
    getContractFactory(
      name: "DaiJoin",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DaiJoin__factory>;
    getContractFactory(
      name: "DSTokenLike",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DSTokenLike__factory>;
    getContractFactory(
      name: "GemLike",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.GemLike__factory>;
    getContractFactory(
      name: "VatLike",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VatLike__factory>;
    getContractFactory(
      name: "ILGuardTable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ILGuardTable__factory>;
    getContractFactory(
      name: "ISavingsDai",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISavingsDai__factory>;
    getContractFactory(
      name: "MonitorDAI",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MonitorDAI__factory>;
    getContractFactory(
      name: "DaiJoinLike",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DaiJoinLike__factory>;
    getContractFactory(
      name: "DaiLike",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DaiLike__factory>;
    getContractFactory(
      name: "IERC1271",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC1271__factory>;
    getContractFactory(
      name: "PotLike",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PotLike__factory>;
    getContractFactory(
      name: "SavingsDai",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SavingsDai__factory>;
    getContractFactory(
      name: "VatLike",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.VatLike__factory>;
    getContractFactory(
      name: "ITablelandController",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITablelandController__factory>;
    getContractFactory(
      name: "ITablelandTables",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITablelandTables__factory>;
    getContractFactory(
      name: "ERC721AQueryablePolicies",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721AQueryablePolicies__factory>;
    getContractFactory(
      name: "ERC721EnumerablePolicies",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721EnumerablePolicies__factory>;
    getContractFactory(
      name: "TablelandTables",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TablelandTables__factory>;
    getContractFactory(
      name: "TablelandDeployments",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TablelandDeployments__factory>;
    getContractFactory(
      name: "Vat",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Vat__factory>;
    getContractFactory(
      name: "ERC721A__IERC721ReceiverUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721A__IERC721ReceiverUpgradeable__factory>;
    getContractFactory(
      name: "ERC721AUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721AUpgradeable__factory>;
    getContractFactory(
      name: "ERC721AQueryableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721AQueryableUpgradeable__factory>;
    getContractFactory(
      name: "IERC721AQueryableUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721AQueryableUpgradeable__factory>;
    getContractFactory(
      name: "IERC721AUpgradeable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721AUpgradeable__factory>;
    getContractFactory(
      name: "ERC721A__IERC721Receiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721A__IERC721Receiver__factory>;
    getContractFactory(
      name: "ERC721A",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721A__factory>;
    getContractFactory(
      name: "ERC721AQueryable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721AQueryable__factory>;
    getContractFactory(
      name: "IERC721AQueryable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721AQueryable__factory>;
    getContractFactory(
      name: "IERC721A",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC721A__factory>;

    getContractAt(
      name: "AggregatorV3Interface",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AggregatorV3Interface>;
    getContractAt(
      name: "OwnableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnableUpgradeable>;
    getContractAt(
      name: "IERC1822ProxiableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1822ProxiableUpgradeable>;
    getContractAt(
      name: "IERC1967Upgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1967Upgradeable>;
    getContractAt(
      name: "IBeaconUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBeaconUpgradeable>;
    getContractAt(
      name: "ERC1967UpgradeUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC1967UpgradeUpgradeable>;
    getContractAt(
      name: "Initializable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Initializable>;
    getContractAt(
      name: "UUPSUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.UUPSUpgradeable>;
    getContractAt(
      name: "PausableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PausableUpgradeable>;
    getContractAt(
      name: "ReentrancyGuardUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ReentrancyGuardUpgradeable>;
    getContractAt(
      name: "ContextUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ContextUpgradeable>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "ERC721Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Enumerable>;
    getContractAt(
      name: "IERC721Enumerable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Enumerable>;
    getContractAt(
      name: "IERC721Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Metadata>;
    getContractAt(
      name: "IERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721>;
    getContractAt(
      name: "IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721Receiver>;
    getContractAt(
      name: "ERC721Holder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721Holder>;
    getContractAt(
      name: "ERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC165>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "ITablelandTables",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITablelandTables>;
    getContractAt(
      name: "TablelandDeployments",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TablelandDeployments>;
    getContractAt(
      name: "CurrencyPrice",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CurrencyPrice>;
    getContractAt(
      name: "DaiJoin",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DaiJoin>;
    getContractAt(
      name: "DSTokenLike",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DSTokenLike>;
    getContractAt(
      name: "GemLike",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.GemLike>;
    getContractAt(
      name: "VatLike",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VatLike>;
    getContractAt(
      name: "ILGuardTable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ILGuardTable>;
    getContractAt(
      name: "ISavingsDai",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISavingsDai>;
    getContractAt(
      name: "MonitorDAI",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MonitorDAI>;
    getContractAt(
      name: "DaiJoinLike",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DaiJoinLike>;
    getContractAt(
      name: "DaiLike",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DaiLike>;
    getContractAt(
      name: "IERC1271",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC1271>;
    getContractAt(
      name: "PotLike",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PotLike>;
    getContractAt(
      name: "SavingsDai",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SavingsDai>;
    getContractAt(
      name: "VatLike",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.VatLike>;
    getContractAt(
      name: "ITablelandController",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITablelandController>;
    getContractAt(
      name: "ITablelandTables",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITablelandTables>;
    getContractAt(
      name: "ERC721AQueryablePolicies",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721AQueryablePolicies>;
    getContractAt(
      name: "ERC721EnumerablePolicies",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721EnumerablePolicies>;
    getContractAt(
      name: "TablelandTables",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TablelandTables>;
    getContractAt(
      name: "TablelandDeployments",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TablelandDeployments>;
    getContractAt(
      name: "Vat",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Vat>;
    getContractAt(
      name: "ERC721A__IERC721ReceiverUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721A__IERC721ReceiverUpgradeable>;
    getContractAt(
      name: "ERC721AUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721AUpgradeable>;
    getContractAt(
      name: "ERC721AQueryableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721AQueryableUpgradeable>;
    getContractAt(
      name: "IERC721AQueryableUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721AQueryableUpgradeable>;
    getContractAt(
      name: "IERC721AUpgradeable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721AUpgradeable>;
    getContractAt(
      name: "ERC721A__IERC721Receiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721A__IERC721Receiver>;
    getContractAt(
      name: "ERC721A",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721A>;
    getContractAt(
      name: "ERC721AQueryable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721AQueryable>;
    getContractAt(
      name: "IERC721AQueryable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721AQueryable>;
    getContractAt(
      name: "IERC721A",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC721A>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}