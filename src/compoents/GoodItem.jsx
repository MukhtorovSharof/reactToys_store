import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardTitle,
  Col,
} from "reactstrap";
export default function GoodItem(props) {
  const { id, name, description, price, full_background, addToBasket } = props;
  return (
    <Col md="4" className="mb-4">
      <Card className="card">
        <CardImg alt="Card image cap" src={full_background} top width="100%" />
        <CardBody className="text-center">
          <CardTitle tag="h5" className="my-3">
            {name}
          </CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {description}
          </CardSubtitle>
          <div className="card-action">
            <h4>
              {price}$
            </h4>
            <Button onClick={() => addToBasket({id, name, price})} className="mb-3 btn btn-success">Buy</Button>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
}
