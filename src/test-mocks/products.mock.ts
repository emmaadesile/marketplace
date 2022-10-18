import { ProductProps } from "../components/product/product.props";

export const products: ProductProps[] = [
  {
    id: "98c1acfa-c141-4095-b2e6-acf52d110178",
    name: "sobloo-s2-l1c-fullscene",
    description: "Provides Sentinel-2 L1C MSI Full Scenes data in SAFE format.",
    metadata: {
      blockThumbnailUrl:
        "https://metadata.up42.com/Sobloo/S2-L1C-GRD-Full-Scene/0_Sentinel2_Avatar_2.jpg",
      blockPricingStrategy: {
        name: "simple",
        credits: 0.0,
      },
    },
  },
  {
    id: "18d09f1a-3197-4c27-a15a-54d099c31435",
    name: "oneatlas-pleiades-aoiclipped",
    description:
      "Pléiades imagery in GeoTIFF format. Pan-sharpened RGB and panchromatic (0.5 m) bands.",
    metadata: {
      blockThumbnailUrl:
        "https://metadata.up42.com/18d09f1a-3197-4c27-a15a-54d099c31435/0_Pleiades_1A-1B_Avatar1612547916649.jpg",
      blockPricingStrategy: {
        name: "simple",
        credits: 3.0,
      },
    },
  },
  {
    id: "b623400c-c5ac-40af-bda2-0d2734aa9dd1",
    name: "sobloo-s1-grd-fullscene",
    description: "Provides Sentinel-1 L1 GRD Full Scenes data in SAFE format.",
    metadata: {
      blockThumbnailUrl:
        "https://metadata.up42.com/Sobloo/S1-L1C-GRD-Full-Scene/0_Sentinel1_Avatar_2.jpg",
      blockPricingStrategy: {
        name: "simple",
        credits: 0.0,
      },
    },
  },
  {
    id: "c94bb4cd-8ee2-40df-ba76-d332b8f48c6a",
    name: "data-conversion-dimap",
    description: "Converts DIMAP to GeoTIFF format.",
    metadata: {
      blockThumbnailUrl:
        "https://metadata.up42.com/c94bb4cd-8ee2-40df-ba76-d332b8f48c6a/Data_Format_Conversion_Thumbnail1599836803066.png",
      blockPricingStrategy: {
        name: "simple",
        credits: 0,
      },
    },
  },
  {
    id: "e826be64-827b-4df9-b32d-56c528b8050d",
    name: "data-conversion-netcdf",
    description: "Converts NetCDF to GeoTIFF format.",
    metadata: {
      blockThumbnailUrl:
        "https://metadata.up42.com/e826be64-827b-4df9-b32d-56c528b8050d/NetCDF_Conversion_Thumbnail1599836961750.png",
      blockPricingStrategy: {
        name: "simple",
        credits: 0,
      },
    },
  },
  {
    id: "7f5645b3-59d7-4800-9dc3-924fb6f70db0",
    name: "snapship",
    description:
      "This block detects ships on Sentinel-1 GRD images. Based on the CFAR approach. Expects one or more and provides ship detection independently for each scene. Output is provided in the form of .geojson files, which mark the detected ships via point geometries. There are two user defined parameters, specifying the minimum and maximum size of expected ships in meters. The default minimum value of 30 meters offers a good balance if a robust detection wants to be ensured; and for experimental purposes users could also consider values at 15 or 20 meters. The CFAR algorithm by itself doesn't react to single very bright pixels, so with a ground resolution of 10 meters, and considering the different placements between pixels of ships, setting the value too low is not advised.",
    metadata: {
      blockThumbnailUrl:
        "https://metadata.up42.com/7f5645b3-59d7-4800-9dc3-924fb6f70db0/geoj1593169962793.jpg",

      blockPricingStrategy: {
        name: "simple",
        credits: 2000.0,
      },
    },
  },
  {
    id: "e6d0cb52-b649-4fca-9f2f-e215b7c02a37",
    name: "aws-s2-l2a",
    description: "Provides Sentinel-2 L2A MSI Full Scenes data in SAFE format.",
    metadata: {
      blockThumbnailUrl:
        "https://metadata.up42.com/e6d0cb52-b649-4fca-9f2f-e215b7c02a37/Sentinel-2-L2A-AOI-avatar1608141648833.png",
      blockPricingStrategy: {
        name: "simple",
        credits: 0,
      },
    },
  },
  {
    id: "f73c60f6-3f3c-4120-96cf-62b8d3019346",
    name: "nextmapone-5m",
    description: "Provides NEXTMap 5 DSM and DTM at 5 meter resolution.",
    metadata: {
      blockThumbnailUrl:
        "https://metadata.up42.com/f73c60f6-3f3c-4120-96cf-62b8d3019346/nextmap_thumbnail1645462208038.png",
      blockPricingStrategy: {
        name: "job_volume_tiered",
        credits: 20
      },
    },
  },
  {
    id: "8e527ea8-c8b3-46ab-86c1-b05dbeee7b42",
    name: "nextmapone-10m",
    description: "Provides NEXTMap 10 DSM and DTM at 10 meter resolution.",
    metadata: {
      blockThumbnailUrl:
        "https://metadata.up42.com/8e527ea8-c8b3-46ab-86c1-b05dbeee7b42/intermap_nextmap10-dsm1645466189303.png",
      blockPricingStrategy: {
        name: "job_volume_tiered",
        credits: 43,
      },
    },
  },
  {
    id: "1f09fcb0-7f5c-4e91-b059-36df7f64d2c9",
    name: "nextmapone-1m",
    description: "Provides NEXTMap One DSM and DTM at 1 meter resolution.",
    metadata: {
      blockThumbnailUrl:
        "https://metadata.up42.com/1f09fcb0-7f5c-4e91-b059-36df7f64d2c9/nextmapone-dsm-thumbnail1645175068700.png",
      blockPricingStrategy: {
        name: "job_volume_tiered",
        credits: 30,
      },
    },
  },
  {
    id: "6cf139d5-bc8e-4201-9464-964899296d41",
    name: "advanced-water-related-geohazards-predictor",
    description:
      "This block provides a water-related geohazards prediction processing workflow with Sentinel-2 Geotiff format scenes. This processing block is developed and launched for providing the users with a convenient way to query for the water-related geohazards (such as flooding, exposure to the water body, etc.) for their interested areas. The users can use this Platoi's processing block to query any place on the earth at any time for the predicted water-related geohazards. The machine learning model for this block has been recently optimised in October 2020",
    metadata: {
      blockThumbnailUrl:
        "https://metadata.up42.com/6cf139d5-bc8e-4201-9464-964899296d41/Platoi_up42_Avatar1611275709997.jpg",
      blockPricingStrategy: {
        name: "simple",
        credits: 1000,
      },
    },
  },
  {
    id: "446645af-4722-42c5-be4e-88081e25ce51",
    name: "dymaxionlabs/up42-pools-detector",
    description: "Uses AI algorithms to detect swimming pools.",

    metadata: {
      blockThumbnailUrl:
        "https://metadata.up42.com/446645af-4722-42c5-be4e-88081e25ce51/block-avatar1593780158757.png",
      blockPricingStrategy: {
        name: "simple",
        credits: 99.0,
      },
    },
  },
  {
    id: "3c89d53e-6aec-43bb-b8b8-3e7f0132e28e",
    name: "aws-l8-l1",
    description:
      "Provides Landsat 8 Full Scenes data in MTL format consisting of one GeoTIFF file per band with metadata.",
    metadata: {
      blockThumbnailUrl:
        "https://metadata.up42.com/3c89d53e-6aec-43bb-b8b8-3e7f0132e28e/L8_USGS1593719757302.png",
      blockPricingStrategy: {
        name: "simple",
        credits: 0.0,
      },
    },
  },
  {
    id: "dd0ffe31-6d70-45a0-90d2-ddebe73ce807",
    name: "landcover",
    description: "Classifies imagery into discrete land cover classes.",
    metadata: {
      blockThumbnailUrl:
        "https://metadata.up42.com/dd0ffe31-6d70-45a0-90d2-ddebe73ce807/land-cover-classification-thumbnail1593718729068.png",
      blockPricingStrategy: {
        name: "simple",
        credits: 120.0,
      },
    },
  },
  {
    id: "df2ec03a-50c4-47ac-8a83-2db613869cf9",
    name: "openstreetmap",
    description: "Imports vector layers from OSM.",
    metadata: {
      blockThumbnailUrl:
        "https://metadata.up42.com/df2ec03a-50c4-47ac-8a83-2db613869cf9/OSM_logo1595351335981.png",
      blockPricingStrategy: {
        name: "simple",
        credits: 0.0,
      },
    },
  },
];
