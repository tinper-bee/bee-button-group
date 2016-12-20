/**
 *
 * @title 块状按钮组
 * @description 块状按钮组会充满父元素
 *
 */

class Demo3 extends Component {

    render () {
        return (
            <Row>
                <Col md={4}>
                    <ButtonGroup vertical block>
                        <Button size="lg" colors="primary">按钮一</Button>
                        <Button size="lg" colors="primary">按钮二</Button>
                        <Button size="lg" colors="primary">按钮三</Button>
                    </ButtonGroup>
                </Col>
            </Row>

        )
    }
}
